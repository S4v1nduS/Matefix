import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import Navbar from "@/components/MatefixNavbar";
import Footer from "@/components/MatefixFooter";
import PageFade from "@/components/PageFade"; // 🧩 add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MateFix | Your mate for every fix",
  description:
    "Emergency plumbers, electricians, locksmiths and glass repair at your door in under 90 minutes. Live tracking, safe payments, and trusted tradies across Australia & New Zealand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <PageFade>{children}</PageFade> {/* 🎬 wrap your page content */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
