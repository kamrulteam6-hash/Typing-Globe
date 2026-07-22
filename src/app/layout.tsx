import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SyncBridge } from "@/components/SyncBridge";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.typingglobe.com"),
  title: {
    default: "Typing Globe — Multilingual Typing Speed Test & Practice",
    template: "%s | Typing Globe",
  },
  description:
    "Free typing speed test and practice platform in 70 languages. Measure your WPM and accuracy, practice touch typing, and prepare for government exams — every script, every keyboard.",
  openGraph: {
    title: "Typing Globe — Multilingual Typing Speed Test & Practice",
    description:
      "Free typing speed test and practice platform in 70 languages. Measure your WPM and accuracy, practice touch typing, every script, every keyboard.",
    url: "https://www.typingglobe.com",
    siteName: "Typing Globe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SyncBridge />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
