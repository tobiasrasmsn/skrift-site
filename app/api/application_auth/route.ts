// app/api/validate-serial-key/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        const { serialKey, machineId } = await request.json();

        if (!serialKey || !machineId) {
            return NextResponse.json({ valid: false, message: "Serial key or machine ID is missing." });
        }

        // Step 1: Fetch serial key from the database
        const { data: keyData, error: fetchError } = await supabase
            .from("serial_keys")
            .select("*")
            .eq("serial_key", serialKey)
            .single();

        if (fetchError) {
            console.error("Error fetching serial key:", fetchError);
            return NextResponse.json({ valid: false, message: "Serial key not found." });
        }

        // Step 2: Check if the key is already used
        if (keyData.is_used && keyData.machine_id !== machineId) {
            // If already used and machine ID doesn't match, it's invalid
            return NextResponse.json({ valid: false, message: "Serial key is already used by another machine." });
        }

        // Step 3: Update the serial key to mark as used and set machine_id
        const { data, error: updateError } = await supabase
            .from("serial_keys")
            .update({ is_used: true, machine_id: machineId })
            .eq("serial_key", serialKey);

        if (updateError) {
            console.error("Error updating serial key:", updateError); // Log the actual error for debugging
            return NextResponse.json({ valid: false, message: "Failed to update serial key." });
        }

        // Step 4: Return success response
        return NextResponse.json({ valid: true, message: "Serial key validated successfully." });
    } catch (error) {
        console.error("Error in serial key validation route:", error);
        return NextResponse.json({ valid: false, message: "Internal Server Error" });
    }
}
