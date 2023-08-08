import "./globals.css";
import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "React Hooks Guide",
    description: "Helps you to understand new React hooks",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={lilita.className}>{children}</body>
        </html>
    );
}
