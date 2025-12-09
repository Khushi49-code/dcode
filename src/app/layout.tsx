import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import SubscribeFooter from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import CustomChatbot from "@/components/CustomChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dcodes - AI Solutions for Modern Businesses",
  description:
    "Stay ahead with our cutting-edge AI solutions tailored for your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingScreen>
          <Navbar />
          {children}
          <Toaster position="top-right" />
          <SubscribeFooter />
          <CustomChatbot />
        </LoadingScreen>
      </body>
    </html>
  );
}