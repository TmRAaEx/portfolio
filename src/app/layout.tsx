import React from "react"
import type {Metadata} from "next";
import "./globals.css"

export const metadata: Metadata = {
    title: "Alexander Hirsch",
    description: "Välkommen till min portfolio. Här hittar du många av minna programmeringsprojekt samt allmän info om mig som programmerare.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="bg-notBlack">
        {children}
        </body>
        </html>
    );
}
