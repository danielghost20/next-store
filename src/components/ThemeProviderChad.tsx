'use client'
import { ThemeProvider } from "next-themes";
import React from "react";

type ChildrenProps = {
    children: React.ReactNode
}
export default function ThemeProviderChad({ children }: ChildrenProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}