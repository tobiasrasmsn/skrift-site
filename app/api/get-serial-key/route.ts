// app/api/get-serial-key/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        const { email, pin } = await request.json();

        // Check if email and PIN are provided
        if (!email || !pin) {
            return NextResponse.json({ message: "Email or PIN is missing." }, { status: 400 });
        }

        // Step 1: Fetch the serial key associated with the email and PIN
        const { data: keyData, error: fetchError } = await supabase
            .from("serial_keys")
            .select("*")
            .eq("email", email)
            .eq("pin", pin)
            .single();

        if (fetchError || !keyData) {
            console.error("Error fetching serial key:", fetchError);
            return NextResponse.json({ message: "Invalid email or PIN." }, { status: 404 });
        }

        // Step 2: Return the serial key
        return NextResponse.json({ serialKey: keyData.serial_key });
    } catch (error) {
        console.error("Error fetching serial key:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
