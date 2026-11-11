import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, siteUrl } from "@/lib/brand";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
});

const description =
  "Importez véhicules et marchandises de Chine, Dubaï et Turquie vers l'Afrique. Catalogue en ligne, devis douane & transport, fret maritime et aérien, suivi WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND.name} — Import de véhicules & marchandises vers l'Afrique`,
    template: `%s | ${BRAND.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    locale: "fr_FR",
    title: `${BRAND.name} — Import de véhicules & marchandises vers l'Afrique`,
    description,
    images: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${barlow.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-dark text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
