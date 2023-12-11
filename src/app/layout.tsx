import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderChad from "@/components/providers/ThemeProviderChad";
import Cart from "@/components/cart/Cart";
import { CartProvider } from "@/context/CartContext";
import UserSessionProvider from "@/components/providers/UserSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-store",
  description: "Una tienda virtual construida con nextJS 13 y Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserSessionProvider>

        <CartProvider>
          <ThemeProviderChad>
            <Cart />
            {children}
          </ThemeProviderChad>
        </CartProvider>
        </UserSessionProvider>
      </body>
    </html>
  );
}
