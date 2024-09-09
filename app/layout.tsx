// ----- server side component

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/navBar";
import Footer from "./components/footer/footer";
import CartProvider from "@/providers/cartProvider";
import { getCurrentUser } from "@/actions/getCurrentUser";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "zapMart - online MarketPlace",
  description: "e-commerce app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-white`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow bg-black">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
