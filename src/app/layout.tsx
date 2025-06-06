import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import Script from "next/script";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',  // Ensure text remains visible during font loading
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "GoldWorld - Premium Gold & Jewelry",
  description: "Buy premium gold coins, bars, and jewelry with assured purity and craftsmanship",
  // Next.js 13+ automatically uses favicon.ico from app directory
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b45309" />
      </head>
      <body className="min-h-screen flex flex-col bg-amber-50 custom-scrollbar">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </CartProvider>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
