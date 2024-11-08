import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["cyrillic", "latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    style: "normal",
    weight: ["400"],
    subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
    title: "Агроном Сад",
    description: "Тестовое задание для ITLabs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${openSans.variable} ${roboto.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
