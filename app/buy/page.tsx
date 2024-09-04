import ApplicationPreview from "@/components/shared/ApplicationPreview";
import Skrift from "@/components/store/Skrift";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";
import { Badge } from "lucide-react";
import Link from "next/link";

export default function BuyPage() {
    const features = [
        {
            title: "Built for developers",
            description: "Built for engineers, developers, dreamers, thinkers and doers.",
            icon: <IconTerminal2 />,
        },
        {
            title: "Ease of use",
            description: "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Pricing like no other",
            description: "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "100% Uptime guarantee",
            description: "We just cannot be taken down by anyone.",
            icon: <IconCloud />,
        },
        {
            title: "Multi-tenant Architecture",
            description: "You can simply share passwords instead of buying new seats",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "24/7 Customer Support",
            description: "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <IconHelp />,
        },
        {
            title: "Money back guarantee",
            description: "If you donot like EveryAI, we will convince you to like us.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <IconHeart />,
        },
    ];

    return (
        <section className="px-1 md:px-3 py-3 pt-[80px] flex justify-center items-center h-full min-h-[500px] bg-zinc-200 relative">
            <div className="flex flex-col px-24 py-24 justify-center items-center w-full h-full rounded-xl bg-zinc-950 gap-3 relative">
                <div className="spotlight2 w-full h-full absolute opacity-45 pointer-events-none"></div>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-zinc-100">
                        Elevate Your Productivity <br />
                        with The Skrift Suite
                    </h1>
                    <p className="text-lg mb-8 text-zinc-300">
                        The all-in-one AI-powered tool for faceless content generation.
                    </p>

                    {/* <Button className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 font-bold py-3 px-6 rounded-full text-lg">
                        Get Skrift Suite
                    </Button> */}
                    {/* <div className="mb-[150px] pt-24 z-30 relative">
                        <MacbookScroll
                            title={<span></span>}
                            badge={
                                <Link href="https://peerlist.io/manuarora">
                                    <Badge className="h-10 w-10 transform -rotate-12" />
                                </Link>
                            }
                            src={`/imgs/1.png`}
                            showGradient={true}
                        />
                    </div> */}
                    <Skrift />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 py-0 rounded-lg z-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <Feature key={feature.title} {...feature} index={index} />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4 text-zinc-100">Transform Your Writing Process</h2>
                        <p className="text-lg mb-4 text-zinc-300">
                            Skrift Suite combines cutting-edge AI technology with intuitive design to streamline your
                            writing workflow. Whether you&apos;re crafting business reports, academic papers, or
                            creative content, Skrift Suite has the tools you need to excel.
                        </p>
                        <p className="text-lg text-zinc-300">
                            With our one-time fee of $500, you get lifetime access to Skrift Suite and all future
                            updates. No recurring subscriptions, just a single investment in your writing success.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-zinc-100">Join Thousands of Satisfied Writers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="bg-zinc-800 border-zinc-700">
                                <CardContent className="pt-6">
                                    <p className="italic mb-4 text-zinc-300">
                                        &quot;Skrift Suite has revolutionized my writing process. It&apos;s like having
                                        a personal editor and writing coach available 24/7.
                                    </p>
                                    <p className="font-bold text-zinc-100">- Happy Customer {i}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-zinc-100">Ready to Transform Your Writing?</h2>
                    <p className="text-xl mb-8 text-zinc-300">
                        Get lifetime access to Skrift Suite for a one-time payment of $500
                    </p>
                    <Button className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 font-bold py-3 px-6 rounded-full text-lg">
                        Purchase Skrift Suite Now
                    </Button>
                </div>
                <TextHoverEffect text="SKRIFT" automatic />
                <div className="absolute z-0 top-0 opacity-5 h-[900px] w-full rounded-lg bg-background overflow-hidden pointer-events-none">
                    <div className="bg-gradient-to-b top-0 from-transparent to-zinc-950 w-full h-full absolute z-10"></div>
                    <FlickeringGrid
                        className="z-0 absolute inset-0 size-full"
                        squareSize={22}
                        gridGap={2}
                        color="#6B7280"
                        maxOpacity={0.5}
                        flickerChance={0.2}
                    />
                </div>
            </div>
        </section>
    );
}
const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
        </div>
    );
};
