"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ApplicationPreview: React.FC = () => {
    // Mock data for demonstration
    const apps = [
        {
            name: "Nexus",
            version: "1.0",
            iconPath: "/imgs/nexus.webp",
            description:
                "AI-driven video production suite that seamlessly integrates with Quill and Resonance to automate the creation and editing of professional-quality documentaries.",
        },
        {
            name: "Quill",
            version: "2.1",
            iconPath: "/imgs/quill.webp",
            description:
                "AI-powered documentary script generator. Creates scripts up to 5 hours long using OpenAI, Claude, or local AI models.",
        },

        {
            name: "Resonance",
            version: "2.1",
            iconPath: "/imgs/resonance.webp",
            description:
                "Advanced voiceover generation tool. Creates high-quality audio narration for documents produced by Quill.",
        },

        {
            name: "Babel",
            version: "2.1",
            iconPath: "/imgs/babel.webp",
            description: "High-accuracy AI-powered translation tool designed for large documents.",
        },
        // Add more mock apps as needed
    ];

    return (
        <div className="rounded-lg">
            <div className="flex flex-col w-full h-full bg-zinc-900 text-zinc-100 rounded-lg">
                <header className="text-primary-foreground py-4">
                    <div className="px-4">
                        <div className="flex items-center justify-between">
                            <Image
                                width={100}
                                height={50}
                                src="/imgs/skriftlogo.png"
                                className="pointer-events-none"
                                alt=""
                                unoptimized
                                priority
                            />
                            <nav>
                                <ul className="flex space-x-4">
                                    <li>
                                        <Link href="/">
                                            <Button variant="ghost" className="text-zinc-100">
                                                Programs
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/settings">
                                            <Button variant="ghost" className="text-zinc-100">
                                                Settings
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <main className="flex-grow p-4 pt-2">
                    <div className="flex-grow overflow-y-scroll custom-scrollbar h-full max-h-[350px] bg-zinc-800/25 rounded-md border border-zinc-800">
                        <h2 className="text-zinc-400 py-2 mb-2 text-lg bg-[#1d1d1f] sticky top-0 pl-4">Applications</h2>
                        <div className="px-4 pb-4">
                            <div className="grid grid-cols-2 gap-4">
                                {apps.map((program) => (
                                    <Card key={program.name} className="flex flex-col bg-zinc-800 border-zinc-700">
                                        <CardHeader className="flex-row items-center space-y-0 gap-3 p-4 pb-3">
                                            <img
                                                src={program.iconPath}
                                                alt={program.name}
                                                className="w-12 h-12 pointer-events-none"
                                            />
                                            <div className="flex flex-row gap-2 items-center">
                                                <h3 className="font-bold text-xl text-zinc-100">{program.name}</h3>
                                                <h4 className="text-zinc-500 text-[0.65rem] bg-zinc-700 p-1 rounded-sm">
                                                    v{program.version}
                                                </h4>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-0">
                                            <p className="text-sm text-zinc-400 text-left">{program.description}</p>
                                            {/* Static progress bar for demonstration */}
                                        </CardContent>
                                        <CardFooter className="flex justify-between mt-auto p-4 pt-0">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="border-zinc-600 text-zinc-100 hover:text-zinc-100 hover:bg-zinc-600 bg-zinc-700 hover:border-zinc-500"
                                            >
                                                <InfoIcon className="h-4 w-4" />
                                            </Button>
                                            <Button className="bg-zinc-700 text-zinc-100 hover:bg-zinc-600 border border-zinc-600 hover:border-zinc-500">
                                                Open
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <footer
                    style={{ boxShadow: "0 -14px 10px rgba(20, 20, 20, 0.2)" }}
                    className="py-4 rounded-b-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
                >
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <h1 className="text-base font-medium">Skrift Suite</h1>
                        <span className="text-white text-xs opacity-70">Version 1.0.0</span>
                        <span className="text-white">Developed by Arete Studio</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ApplicationPreview;
