import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aldo's Restaurant Abuja",
  description: `Continental RoofTop Restaurant
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Nav />
        <MobileNav />
        {children}
        <Footer />
        <script async src="//www.instagram.com/embed.js"></script>
      </body>
    </html>
  );
}
