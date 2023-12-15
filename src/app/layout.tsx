import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import ThemeProviderChad from "@/components/providers/ThemeProviderChad";
import Cart from "@/components/cart/Cart";
import { CartProvider } from "@/context/CartContext";
import UserSessionProvider from "@/components/providers/UserSessionProvider";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

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
      <body className={roboto.className}>
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
