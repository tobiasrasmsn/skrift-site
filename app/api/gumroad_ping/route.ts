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
        const customFields = formData.get("custom_fields"); // Custom fields come in JSON format
        const isTest = formData.get("test") === "true"; // Check if this is a test request

        // Mock data for testing
        const mockEmail = "testuser2@example.com";
        const mockPin = "1234";

        let emailToUse = saleEmail;
        let pinToUse: string;

        // If it's a test request, use mock email and PIN
        if (isTest) {
            emailToUse = mockEmail;
            pinToUse = mockPin;
        } else {
            // Parse custom fields to extract the PIN in normal (non-test) scenarios
            try {
                pinToUse = JSON.parse(customFields as string)["PIN"];
            } catch (e) {
                return NextResponse.json({ message: "Invalid custom fields format" }, { status: 400 });
            }
        }

        // Step 1: Fetch an available serial key from Supabase
        const { data: availableKey, error: fetchError } = await supabase
            .from("serial_keys")
            .select("*")
            .limit(1)
            .single();

        if (fetchError || !availableKey) {
            console.error("Error fetching available key:", fetchError);
            return NextResponse.json({ message: "No keys available or error occurred." }, { status: 404 });
        }

        // Step 2: Store the email and PIN (mock or real) in the serial key entry and mark as used
        const { data: updatedKey, error: updateError } = await supabase
            .from("serial_keys")
            .update({ sale_id: saleId, email: emailToUse, pin: pinToUse })
            .eq("serial_key", availableKey.serial_key);

        if (updateError) {
            console.error("Error updating serial key:", updateError);
            return NextResponse.json({ message: "Failed to update serial key." }, { status: 500 });
        }

        // Step 3: Return success response to Gumroad's server
        return NextResponse.json({ message: "Serial key assigned successfully." });
    } catch (error) {
        console.error("Error handling Gumroad Ping:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
