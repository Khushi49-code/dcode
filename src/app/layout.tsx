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

// export const metadata: Metadata = {
//   title: "Dcodes - AI Solutions for Modern Businesses",
//   description:
//     "Stay ahead with our cutting-edge AI solutions tailored for your business needs.",
// };


export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcodestech.com"),
  title: "Dcodes Technologies – IT Solutions, Web & App Development",
  description:
    "Dcodes Technologies provides high-performance web, software, ERP, mobile app & digital marketing solutions.",
  openGraph: {
    title: "Dcodes Technologies – IT & Web Solutions",
    description:
      "We offer scalable IT solutions like websites, ERPs, apps & SEO to grow your business.",
    url: "https://www.dcodestech.com",
    images: [
      {
        url: "https://www.dcodestech.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
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