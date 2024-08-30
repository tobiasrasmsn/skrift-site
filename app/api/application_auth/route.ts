// app/api/validate-serial-key/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        const { serialKey, machineId } = await request.json();

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
        if (keyData.is_used) {
            return NextResponse.json({ valid: false, message: "Serial key is already used." });
        }

        // Step 3: Update the serial key to mark as used and set machine_id
        const { error: updateError } = await supabase
            .from("serial_keys")
            .update({ is_used: true, machine_id: machineId })
            .eq("serial_key", serialKey);

        if (updateError) {
            console.error("Error updating serial key:", updateError);
            return NextResponse.json({ valid: false, message: "Failed to update serial key." });
        }

        // Step 4: Return success response
        return NextResponse.json({ valid: true, message: "Serial key validated successfully." });
    } catch (error) {
        console.error("Error in serial key validation route:", error);
        return NextResponse.json({ valid: false, message: "Internal Server Error" });
    }
}
