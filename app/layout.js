import { Geist, Geist_Mono, Fascinate_Inline, Zen_Dots, Inter } from "next/font/google";
import "./globals.css";

//The main layout with different fonts and metadata for the page //

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fascinateInline = Fascinate_Inline({
  variable: "--font-fascinate-inline",
  subsets: ["latin"],
  weight: ["400"],
});
const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  subsets: ["latin"],
  weight: ["400"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Craftsvilla",
  description: "By Nick Cage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${zenDots.variable} ${fascinateInline.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
