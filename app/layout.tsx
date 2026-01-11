import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "BiomiraMed - Sağlıkta Yenilik, Bilimde Güven",
  description:
    "Modern sağlık teknolojileri ile geleceği şekillendiriyoruz. BiomiraMed ile sağlık alanında yenilikçi çözümler keşfedin.",
  keywords:
    "sağlık teknolojileri, medikal cihazlar, biyomedikal, sağlık çözümleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
