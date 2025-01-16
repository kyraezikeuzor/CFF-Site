import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'
import { FAQ } from '@/components/ui/faq'


export const metadata: Metadata = {
  title: "Kids Teaching Kids Code | Compute the Future",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="flex-1 container mx-auto px-6 lg:px-8 xl:px-12 2xl:max-w-[1400px] py-8 bg-[url('/graphics/grid-bg.png')] bg-contain">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
