import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link"; // Used for client-side navigation between pages
import "./globals.css";
import Header from "@/components/Header"; 

const geistSans = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD",
  description: "Licensed Clinical Psychologist in Santa Monica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Header /> 


        {/* ================= PAGE CONTENT ================= */}
        {/* Each page.tsx will render HERE */}
        <main>{children}</main>

<footer className="bg-[#f4f1e3] font-['Lora'] tracking-wide text-[#350905] pt-6 md:pt-12 px-4 md:px-16 lg:px-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6 pb-6 md:pb-8">
    
    {/* Main Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
      
      {/* LEFT - Dr Maya - MINIMUM gaps */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Dr. Maya Reynolds, PsyD</h3>
        <p className="text-xs md:text-sm mb-1">Licensed Clinical Psychologist</p>
        <p className="text-xs md:text-sm mb-0.5">123th Street 45 W</p>
        <p className="text-xs md:text-sm mb-1">Santa Monica, CA 90401</p>
        <p className="text-xs md:text-sm mb-0.5">[maya@mayareynolds.com](mailto:maya@mayareynolds.com)</p>
        <p className="text-xs md:text-sm">(310)555-1234</p>
      </div>

      {/* QUICK LINKS - MINIMUM gaps */}
      <div className="text-center mb-6 md:mb-0">
        <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">QUICK LINKS</h4>
        <ul className="space-y-1 text-xs md:text-sm">
          <li><a href="/" className="hover:opacity-70 transition block py-0.5">Home</a></li>
          <li><a href="/#about" className="hover:opacity-70 transition block py-0.5">About</a></li>
          <li><a href="/#services" className="hover:opacity-70 transition block py-0.5">Services</a></li>
          <li><a href="/contact" className="hover:opacity-70 transition block py-0.5">Contact</a></li>
          <li><a href="/blog" className="hover:opacity-70 transition block py-0.5">Blog</a></li>
        </ul>
      </div>

      {/* HOURS - 1.5 spacing */}
      <div className="text-center md:text-right mb-6 md:mb-0">
        <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">HOURS</h4>
        <div className="text-xs md:text-sm space-y-1.5">
          <div>Monday – Friday<br/>10:00 AM – 6:00 PM</div>
          <div>Saturday<br/>By appointment</div>
          <div>Telehealth available<br/>throughout California</div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-[#d8d2c7] py-3 md:py-4 text-center text-xs leading-tight px-4">
    <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-2 md:mb-3">
      <a href="#" className="hover:opacity-70 transition py-1 px-2">Privacy Policy</a>
      <a href="#" className="hover:opacity-70 transition py-1 px-2">Terms of Service</a>
      <a href="#" className="hover:opacity-70 transition py-1 px-2">Disclaimer</a>
    </div>
    <p className="text-xs md:text-sm">
      © 2026 Dr. Maya Reynolds, PsyD. All rights reserved. | Built for Healing
    </p>
  </div>
</footer>

      </body>
    </html>
  );
}
