import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client on the server side with secure keys
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Handle POST requests for serial key validation
export async function POST(request: NextRequest) {
    try {
        // Extract serialKey from the request body
        const { serialKey } = await request.json();

        // Query the Supabase database to validate the serial key
        const { data, error } = await supabase
            .from("serial_keys")
            .select("id")
            .eq("serial_key", serialKey)
            .eq("is_used", false);

        if (error) {
            console.error("Error fetching data from Supabase:", error);
            return NextResponse.json({ valid: false, message: "Internal server error" }, { status: 500 });
        }

        if (data && data.length > 0) {
            // Mark the key as used if found valid
            const { error: updateError } = await supabase
                .from("serial_keys")
                .update({ is_used: true })
                .eq("serial_key", serialKey);

            if (updateError) {
                console.error("Error updating serial key status:", updateError);
                return NextResponse.json(
                    { valid: false, message: "Error updating serial key status" },
                    { status: 500 }
                );
            }

            return NextResponse.json({ valid: true, message: "Serial key is valid!" }, { status: 200 });
        } else {
            return NextResponse.json({ valid: false, message: "Invalid or used serial key" }, { status: 400 });
        }
    } catch (error) {
        console.error("Error validating serial key:", error);
        return NextResponse.json({ valid: false, message: "Internal server error" }, { status: 500 });
    }
}
