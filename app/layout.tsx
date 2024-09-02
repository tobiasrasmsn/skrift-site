import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/shared/Navigation";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Skrift - The Ultimate Faceless Content Suite",
    description: "From words to visuals, bring your ideas to life with our all-in-one creative solution.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={plus_jakarta_sans.className}>
                <ThemeProvider defaultTheme="dark" attribute="class">
                    <Navigation />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
