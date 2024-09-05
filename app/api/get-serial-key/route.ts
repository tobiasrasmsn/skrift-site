// app/api/get-serial-key/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Check if email is provided
        if (!email) {
            return NextResponse.json({ message: "Email is missing." }, { status: 400 });
        }

        // Step 1: Fetch the serial key associated with the email
        const { data: keyData, error: fetchError } = await supabase
            .from("serial_keys")
            .select("*")
            .eq("email", email)
            .single();

        if (fetchError || !keyData) {
            console.error("Error fetching serial key:", fetchError);
            return NextResponse.json({ message: "Invalid email." }, { status: 404 });
        }

        // Step 2: Return the serial key
        return NextResponse.json({ serialKey: keyData.serial_key });
    } catch (error) {
        console.error("Error fetching serial key:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
