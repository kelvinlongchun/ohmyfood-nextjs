import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ohmyfood",
  description: "Ohmyfood next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
