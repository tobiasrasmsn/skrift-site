// app/welcome/page.tsx
"use client";

import ShinyButton from "@/components/magicui/shiny-button";
import SparklesText from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function WelcomePage() {
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [serialKey, setSerialKey] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear any previous errors
        setSerialKey(""); // Clear previous serial key display
        setLoading(true); // Show loading state

        try {
            const response = await fetch("/api/get-serial-key", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, pin }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                setError(message || "Error retrieving serial key.");
                toast.error("Error retrieving serial key.", {
                    description:
                        "There was an error retrieving your serial key. Make sure to use the same email you use on Gumroad and the correct PIN.",
                });
                setLoading(false); // Hide loading state
                return;
            }

            const { serialKey } = await response.json();
            setSerialKey(serialKey);
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <main className="">
            <section className="px-1 md:px-3 py-3 pt-[80px] flex justify-center items-center h-[100dvh] min-h-[500px] bg-zinc-200 relative">
                <div className="flex flex-col justify-center items-center w-full h-full rounded-xl bg-zinc-950 gap-3 relative">
                    <div className="spotlight w-full h-full absolute opacity-65 pointer-events-none"></div>

                    {/* Conditional Rendering: Show Welcome Message and Form only if serialKey is not set */}
                    {!serialKey ? (
                        <>
                            <h1 className="text-5xl font-medium">Welcome to Skrift</h1>
                            <p className="text-zinc-400 text-base text-center">
                                Please provide the info requested below in order <br />
                                to retrieve your PIN code and download link.
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col gap-1 w-[400px] z-40"
                            >
                                <Input
                                    type="email"
                                    placeholder="Gumroad Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
                                />
                                <Input
                                    type="text"
                                    placeholder="4-Digit PIN"
                                    value={pin}
                                    maxLength={4}
                                    onChange={(e) => setPin(e.target.value)}
                                    required
                                    style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
                                />
                                <Button type="submit" disabled={loading} style={{ width: "100%", padding: "10px" }}>
                                    {loading ? "Loading..." : "Retrieve Serial Key"}
                                </Button>
                            </form>

                            {/* {error && <p className="text-red-500">{error}</p>} */}
                        </>
                    ) : (
                        // Success State: Show Serial Key and Download Button
                        <div className="text-center flex flex-col gap-3">
                            <SparklesText text={serialKey} className="text-2xl" />
                            <Button asChild size={"sm"}>
                                <Link href={"/"}>Download Skrift</Link>
                            </Button>
                            <p className="text-zinc-400 text-base text-center">
                                This serial key is valid for one PC only. Keep this <br />
                                page open until you have unlocked the app.
                            </p>
                        </div>
                    )}

                    <div className="absolute z-0 opacity-5 h-full w-full rounded-lg bg-background overflow-hidden pointer-events-none">
                        <FlickeringGrid
                            className="z-0 absolute inset-0 size-full"
                            squareSize={12}
                            gridGap={1}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.2}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
