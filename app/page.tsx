"use client";

import { motion } from "framer-motion";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Wand2 } from "lucide-react";
import Link from "next/link";
import { ReactLenis, useLenis } from "lenis/react";

const stats = [
    { value: "$400k", label: "Cumulatively Saved" },
    { value: "500", label: "Spots left" },
    { value: "100%", label: "Yours to own" },
    { value: "24/7", label: "Support" },
];
const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 8,
            stiffness: 100,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            damping: 5,
            stiffness: 100,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};
export default function Home() {
    return (
        <ReactLenis root>
            <main className="">
                <section className="px-1 md:px-3 py-3 pt-[80px] pb-0 flex justify-center items-center h-[100dvh] min-h-[500px] bg-zinc-200 relative">
                    <div className="flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-zinc-950 gap-3 relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.65 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="spotlight w-full h-full absolute opacity-65 pointer-events-none"
                        ></motion.div>
                        <div className="w-full h-full absolute pointer-events-none bg-gradient-to-b from-transparent to-zinc-950 z-10"></div>
                        <div
                            className={cn(
                                "group rounded-full border z-20 backdrop-blur-md border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            )}
                        >
                            <AnimatedShinyText className="inline-flex text-sm items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Faceless Content Suite</span>
                            </AnimatedShinyText>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 text-center z-20">
                            The One Suite <br />
                            You&apos;ll Ever Need
                        </h1>
                        <p className="text-sm md:text-lg text-zinc-400 font-normal text-center z-20">
                            From words to visuals, bring your ideas to <br /> life with our all-in-one creative
                            solution.
                        </p>
                        <motion.div variants={itemVariants} className="flex flex-row gap-4 items-center z-20">
                            <Link href="/buy" passHref legacyBehavior className="cursor-pointer">
                                <motion.div variants={buttonVariants} whileHover="hover" className="cursor-pointer">
                                    <Button className="flex items-center space-x-2" asChild>
                                        <a>
                                            <Wand2 className="h-4 w-4" />
                                            <span>Get Started</span>
                                        </a>
                                    </Button>
                                </motion.div>
                            </Link>
                        </motion.div>

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
                <section className="px-1 md:px-3 py-0 flex justify-center items-start h-full bg-zinc-200 relative z-40">
                    <div className="flex flex-col justify-center items-center w-full h-full bg-zinc-950 gap-3 relative">
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: -40, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <HeroVideoDialog
                                className="dark:hidden block"
                                animationStyle="top-in-bottom-out"
                                videoSrc="https://www.youtube.com/embed/6BCuE7Hrq7o"
                                thumbnailSrc="/imgs/app-preview.webp"
                                thumbnailAlt="Hero Video"
                            />
                            <HeroVideoDialog
                                className="hidden dark:block"
                                animationStyle="top-in-bottom-out"
                                videoSrc="https://www.youtube.com/embed/6BCuE7Hrq7o"
                                thumbnailSrc="/imgs/app-preview.webp"
                                thumbnailAlt="Hero Video"
                            />
                        </motion.div>
                    </div>
                </section>
                <section className="px-1 md:px-3 py-0 flex justify-center items-start h-[500px] min-h-[500px] bg-zinc-200 relative">
                    <div className="flex flex-col justify-center items-center w-full h-full bg-zinc-950 gap-3 relative">
                        <div className="text-center space-y-4 py-6 mx-auto">
                            <h2 className="text-[14px] text-primary font-mono font-medium tracking-tight">
                                Our Achievements
                            </h2>
                            <h4 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter">
                                Save Thousands & Stay Creative
                            </h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <Card key={index} className="border-none shadow-none">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <span className="text-4xl font-bold">{stat.value}</span>
                                            <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="px-1 md:px-3 py-3 pt-0 flex justify-center items-start h-[500px] min-h-[500px] bg-zinc-200 relative">
                    <div className="flex flex-col justify-center items-center w-full h-full rounded-b-xl bg-zinc-950 gap-3 relative">
                        <div className="spotlight2 w-full h-full absolute opacity-65 pointer-events-none rotate-180"></div>
                        <TextHoverEffect text="SKRIFT" automatic />
                    </div>
                </section>
            </main>
        </ReactLenis>
    );
}
