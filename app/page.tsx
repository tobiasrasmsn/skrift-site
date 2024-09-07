import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import HeroVideoDialog from "@/components/magicui/hero-video";
import FloatingImage from "@/components/shared/FloatingImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "$400k", label: "Cumulatively Saved" },
    { value: "500", label: "Spots left" },
    { value: "100%", label: "Yours to own" },
    { value: "24/7", label: "Support" },
];
export default function Home() {
    return (
        <main className="">
            <section className="px-1 md:px-3 py-3 pt-[80px] pb-0 flex justify-center items-center h-[100dvh] min-h-[500px] bg-zinc-200 relative">
                <div className="flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-zinc-950 gap-3 relative">
                    <div className="spotlight w-full h-full absolute opacity-65 pointer-events-none"></div>
                    <div className="w-full h-full absolute pointer-events-none bg-gradient-to-b from-transparent to-zinc-950 z-10"></div>
                    <div
                        className={cn(
                            "group rounded-full border z-20 backdrop-blur-md border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}
                    >
                        <AnimatedShinyText className="inline-flex text-sm items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Faceless Content Suite</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 text-center z-20">
                        The One Suite <br />
                        You&apos;ll Ever Need
                    </h1>
                    <p className="text-sm md:text-lg text-zinc-400 font-normal text-center z-20">
                        From words to visuals, bring your ideas to <br /> life with our all-in-one creative solution.
                    </p>
                    <div className="flex flex-row gap-4 items-center z-20">
                        <Button className="text-xs md:text-sm" asChild>
                            <Link href={"/buy"}>Download</Link>
                        </Button>
                        <Button className="text-xs md:text-sm">Read More</Button>
                    </div>
                    {/* <TextHoverEffect text="ACET" /> */}{" "}
                    {/* <div className="hidden md:block">
                        <FloatingImage
                            src={"/imgs/nexus.webp"}
                            width={64}
                            height={64}
                            rotation={-12}
                            alt=""
                            className="z-20 absolute left-[15%] xl:left-[27%] top-[40%] -translate-x-[50%] -translate-y-[50%] -rotate-12 pointer-events-none"
                        />
                        <FloatingImage
                            src={"/imgs/babel.webp"}
                            width={64}
                            height={64}
                            rotation={-12}
                            speed={1.2}
                            alt=""
                            className="z-20 absolute left-[15%] xl:left-[27%] top-[60%] -translate-x-[50%] -translate-y-[50%] -rotate-12 pointer-events-none"
                        />
                        <FloatingImage
                            src={"/imgs/quill.webp"}
                            width={64}
                            height={64}
                            rotation={12}
                            alt=""
                            className="z-20 absolute left-[82%] xl:left-[70%] top-[40%] -translate-x-[50%] -translate-y-[50%] rotate-12 pointer-events-none"
                        />{" "}
                        <FloatingImage
                            src={"/imgs/resonance.webp"}
                            width={64}
                            rotation={12}
                            height={64}
                            speed={1.2}
                            alt=""
                            className="z-20 absolute left-[82%] xl:left-[70%] top-[60%] -translate-x-[50%] -translate-y-[50%] rotate-12 pointer-events-none"
                        />
                    </div> */}
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
                    <div className="-translate-y-[40px]">
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
                    </div>
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
            {/* <section className="px-3 py-3 pt-[80px] flex justify-center items-center h-[100dvh] min-h-[500px] bg-zinc-200 relative">
                <div className="relative w-full h-[720px]">
                    <Image
                        src={"/imgs/app-preview.webp"}
                        alt="Application Preview"
                        fill
                        className="relative"
                        style={{ objectFit: "cover" }}
                        unoptimized
                        priority
                    />
                </div>
            </section> */}
        </main>
    );
}
