import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'TechSite',
  description: 'PC-style frontend + Django backend',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="logo">PC<span>MAG</span></div>
          <nav className="nav">
          <a href="#">#PrimeDay2025</a>
          <a href="#">#Top100BudgetBuys</a>
          <Link href="/cpu">CPUs</Link>
          <Link href="/laptop">Laptops</Link>
          <a href="#">Reviews</a>
          <a href="#">How-To</a>
          <a href="#">News</a>
          <a href="#">Deals</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
