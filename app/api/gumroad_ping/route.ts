// app/api/gumroad-ping/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        // Parse the incoming request payload (x-www-form-urlencoded)
        const formData = await request.formData();
        const saleEmail = formData.get("email") as string;
        const saleId = formData.get("sale_id") as string;

        // Check if email and sale_id are present
        if (!saleEmail || !saleId) {
            return NextResponse.json({ message: "Email or sale_id is missing." }, { status: 400 });
        }

        // Step 1: Verify the sale using email and sale_id with Gumroad's API
        const isValid = await verifySale(saleEmail, saleId);

        if (!isValid) {
            return NextResponse.json({ message: "Verification failed." }, { status: 401 });
        }

        // Step 2: Fetch an available serial key from Supabase
        const { data: availableKey, error: fetchError } = await supabase
            .from("serial_keys")
            .select("*")
            .eq("is_used", false)
            .limit(1)
            .single();

        if (fetchError || !availableKey) {
            console.error("Error fetching available key:", fetchError);
            return NextResponse.json({ message: "No keys available or error occurred." }, { status: 404 });
        }

        // Step 3: Mark the key as issued in Supabase
        const { data: updatedKey, error: updateError } = await supabase
            .from("serial_keys")
            .update({ is_used: true, sale_id: saleId })
            .eq("serial_key", availableKey.serial_key);

        if (updateError) {
            console.error("Error updating serial key:", updateError);
            return NextResponse.json({ message: "Failed to update serial key." }, { status: 500 });
        }

        // Step 4: Return the key to Gumroad's server
        return NextResponse.json({ key: availableKey.serial_key });
    } catch (error) {
        console.error("Error handling Gumroad Ping:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// Example function to verify the sale by email and sale_id (to be implemented)
async function verifySale(email: string, saleId: string): Promise<boolean> {
    // Implement actual logic to verify the sale using Gumroad's API

    try {
        // Example: Replace this with an actual API call to Gumroad's endpoint to verify the sale_id
        const response = await fetch("https://api.gumroad.com/v2/sales", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.GUMROAD_ACCESS_TOKEN}`, // Make sure to set this in your environment variables
            },
        });

        if (!response.ok) {
            console.error("Error verifying sale with Gumroad API");
            return false;
        }

        const data = await response.json();

        // Check if the sale_id and email match
        return data.sales.some((sale: any) => sale.id === saleId && sale.email === email);
    } catch (error) {
        console.error("Error in sale verification:", error);
        return false;
    }
}
