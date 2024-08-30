// app/api/validate-serial-key/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "");

export async function POST(request: NextRequest) {
    try {
        const { serialKey, machineId } = await request.json();

        // Step 1: Check if the serial key exists and is valid
        const { data: serialData, error: serialError } = await supabase
            .from("serial_keys")
            .select("*")
            .eq("serial_key", serialKey)
            .single();

        if (serialError || !serialData) {
            return NextResponse.json({ valid: false, message: "Invalid serial key" });
        }

        // Step 2: Check if the serial key is already used
        if (serialData.machine_id) {
            if (serialData.machine_id === machineId) {
                // The key is already used by this machine
                return NextResponse.json({ valid: true, message: "Serial key is already valid on this machine" });
            } else {
                // The key is used by another machine
                return NextResponse.json({ valid: false, message: "Serial key already used on another machine" });
            }
        }

        // Step 3: If the serial key is valid and not used, associate it with the machineId
        const { error: updateError } = await supabase
            .from("serial_keys")
            .update({ machine_id: machineId })
            .eq("serial_key", serialKey);

        if (updateError) {
            return NextResponse.json({ valid: false, message: "Failed to associate serial key with machine" });
        }

        return NextResponse.json({ valid: true, message: "Serial key validated and associated with machine" });
    } catch (error) {
        console.error("Error validating serial key:", error);
        return NextResponse.json({ valid: false, message: "Server error during validation" });
    }
}
