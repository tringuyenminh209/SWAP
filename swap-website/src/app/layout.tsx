import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Google Font - Nunito (SWAP Design System)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "SWAP - Stop Waste And Plastic",
  description: "High school student-led initiative tackling plastic waste in Japanese supermarkets through research, advocacy, and community action.",
  keywords: ["plastic waste", "environmental activism", "sustainability", "Japan", "supermarkets", "student initiative"],
  authors: [{ name: "SWAP Team" }],
  openGraph: {
    title: "SWAP - Stop Waste And Plastic",
    description: "Student-led movement tackling plastic waste in Japanese supermarkets",
    type: "website",
    locale: "en_US",
    alternateLocale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWAP - Stop Waste And Plastic",
    description: "Student-led movement tackling plastic waste in Japanese supermarkets",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
