import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';



const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'SegurApp - Seguridad Laboral',
  description: 'Plataforma centralizada para la seguridad en el trabajo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className}flex flex-col min-h-screen antialiased`}
      >
        <Navbar />
        <main className="relative bg-black z-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
