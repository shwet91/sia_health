import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import WhatsappIcon from "@/components/landingPage/WhatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balance Hormones Naturally :  PCOS, Thyroid Disorders ",
  description:
    "Sia Health provides expert led, evidence based care for women's hormonal health issues such as PCOS/PCOD , thyroid disorder, peri menopause etc. Our holistic approach combines personalized lifestyle, nutrition, and exercise solutions for lasting well-being and improved health.",
  keywords: [
    "PCOS",
    "women's health",
    "Hormonal health",
  ],
  icons: {
    icon: "/fav_icon.png", // default
    apple: "/fav.jpeg", // for iOS (if you have one)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappIcon />
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            classNames: {
              success: "[&>div>svg]:!text-[#FF4B00] [&>div]:!text-[#FF4B00]",
              error: "[&>div>svg]:!text-[#FF4B00] [&>div]:!text-[#FF4B00]",
              info: "[&>div>svg]:!text-[#FF4B00] [&>div]:!text-[#FF4B00]",
              warning: "[&>div>svg]:!text-[#FF4B00] [&>div]:!text-[#FF4B00]",
            },
          }}
        />
      </body>
    </html>
  );
}
