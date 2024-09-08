"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/welcome", label: "About" },
        { href: "/ee", label: "Pricing" },
        { href: "/buy", label: "Get Started", isButton: true },
    ];

    return (
        <header className="absolute w-full pt-2 py-3 px-1 md:px-3 z-[100]">
            <div className="w-full bg-zinc-100 py-3 px-4 rounded-xl flex flex-row justify-between items-center shadow-md">
                <Image
                    className="pointer-events-none"
                    src="/imgs/skrifticon.png"
                    alt=""
                    width={100}
                    height={50}
                    priority
                    unoptimized
                />
                <nav>
                    <ul className="text-zinc-600 text-sm hidden md:flex flex-row items-center gap-4">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={item.isButton ? "" : "hover:text-zinc-900 transition-colors duration-200"}
                            >
                                {item.isButton ? (
                                    <Button
                                        size="sm"
                                        className="bg-zinc-900 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-200"
                                        asChild
                                    >
                                        <Link href={item.href}>{item.label}</Link>
                                    </Button>
                                ) : (
                                    <Link href={item.href}>{item.label}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="md:hidden text-zinc-600 hover:text-zinc-900" onClick={toggleMenu}>
                    <Menu size={24} />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-zinc-100 z-50 flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-8 right-4 text-zinc-600 hover:text-zinc-900"
                            onClick={toggleMenu}
                        >
                            <X size={24} />
                        </button>
                        <nav>
                            <ul className="flex flex-col items-center gap-6">
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className={
                                            item.isButton
                                                ? ""
                                                : "text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                                        }
                                    >
                                        {item.isButton ? (
                                            <Button
                                                size="lg"
                                                className="bg-zinc-900 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-200"
                                                asChild
                                            >
                                                <Link href={item.href} onClick={toggleMenu}>
                                                    {item.label}
                                                </Link>
                                            </Button>
                                        ) : (
                                            <Link href={item.href} onClick={toggleMenu} className="text-2xl">
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
