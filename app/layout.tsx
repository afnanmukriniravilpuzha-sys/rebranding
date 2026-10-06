import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import Effects from "./effects";

export const metadata: Metadata = {
  title: "IndianOil | Energy for Every Indian",
  description: "Explore IndianOil's energy services, Indane LPG, Sportstars and consumer assistance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand"><span className="brand-mark">IO</span><span>Indian<span className="x">Oil</span></span></Link>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/nayara-gas">Indane LPG</Link>
            <Link href="/sportstars">Sportstars</Link><Link href="/sheetal-devi">Sheetal Devi</Link>
            <Link href="/annual-report">Annual Report</Link><Link href="/pros-cons">Good &amp; Bad</Link>
          </nav>
        </header>
        <main>{children}</main>
        <Effects />
        <footer className="site-footer"><p>IndianOil information portal · Assistance: <b>9061859496</b> · <a href="https://iocl.com" target="_blank" rel="noreferrer">iocl.com</a></p></footer>
      </body>
    </html>
  );
}
