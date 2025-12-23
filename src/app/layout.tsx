import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import SubscribeFooter from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import CustomChatbot from "@/components/CustomChatbot";
import Script from "next/script";
 import ProtectConsole from "@/components/ProtectConsole";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcodestech.com"),

  title: {
    default: "Dcodes Technologies",
    template: "%s | Dcodes Technologies",
  },

  description:
    "Dcodes Technologies is a web development and IT solutions company.",

  openGraph: {
    siteName: "Dcodes Technologies",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Schema Markup */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dcodes Technologies",
              url: "https://www.dcodestech.com",
              logo: "https://www.dcodestech.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "E914 Ganesh Glory 11",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382470",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/share/1F89hvr99T/",
                "https://www.instagram.com/dcodes_technologies",
                "https://www.linkedin.com/company/dcodes-technologies/",
              ],
            }),
          }}
        />

        <LoadingScreen>
          <Navbar />
            <ProtectConsole /> 
          {children}
          <Toaster position="top-right" />
          <SubscribeFooter />
          <CustomChatbot />
        </LoadingScreen>
      </body>
    </html>
  );
}
