import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <section className="px-3 py-3 pt-[80px] flex justify-center items-center h-[100dvh] min-h-[500px] bg-zinc-200 relative">
                <div className="flex flex-col justify-center items-center w-full h-full rounded-xl bg-zinc-950 gap-3 relative">
                    <div className="spotlight w-full h-full absolute opacity-65 pointer-events-none">
                        {/* Other content can go here */}
                    </div>
                    <div
                        className={cn(
                            "group rounded-full border z-20 backdrop-blur-md border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}
                    >
                        <AnimatedShinyText className="inline-flex text-sm items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Faceless Content Tool</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                    <h1 className="text-5xl font-bold text-zinc-100 text-center z-20">
                        The One Suite <br />
                        You&apos;ll Ever Need
                    </h1>
                    <p className="text-lg text-zinc-400 font-normal text-center z-20">
                        From words to visuals, bring your ideas to <br /> life with our all-in-one creative solution.
                    </p>
                    <div className="flex flex-row gap-4 items-center z-20">
                        <Button>Get Started</Button>
                        <Button>Read More</Button>
                    </div>
                    {/* <TextHoverEffect text="ACET" /> */}{" "}
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
