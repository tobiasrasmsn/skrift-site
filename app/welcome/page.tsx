// app/welcome/page.tsx
"use client";

import { useState } from "react";

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
        <div
            className="flex flex-col min-h-screen justify-center items-center"
            style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}
        >
            <h1>Welcome! Retrieve Your Serial Key</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your Gumroad email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Enter your PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                    style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <button type="submit" disabled={loading} style={{ width: "100%", padding: "10px" }}>
                    {loading ? "Loading..." : "Retrieve Serial Key"}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {serialKey && <p style={{ color: "green", fontWeight: "bold" }}>Your Serial Key: {serialKey}</p>}
        </div>
    );
}
