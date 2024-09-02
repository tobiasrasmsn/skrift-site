import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navigation() {
    return (
        <header className="absolute w-full pt-2 py-3 px-3 z-[100]">
            <div className="w-full bg-zinc-50 py-3 px-4 rounded-xl flex flex-row justify-between items-center">
                <Image src={"/imgs/skrifticon.png"} alt="" width={100} height={50} priority unoptimized />
                <nav>
                    <ul className="text-zinc-600 text-sm flex flex-row items-center gap-4">
                        <li className="hover:text-zinc-900 transition-colors duration-200">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className="hover:text-zinc-900 transition-colors duration-200">
                            <Link href={"/"}>About</Link>
                        </li>
                        <li className="hover:text-zinc-900 transition-colors duration-200">
                            <Link href={"/"}>Pricing</Link>
                        </li>
                        <Button
                            size="sm"
                            className="bg-zinc-900 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-200"
                            asChild
                        >
                            <Link href={"/"}>Get Started</Link>
                        </Button>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
