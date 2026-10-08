import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import EscapeHome from "@/components/EscapeHome";

export const metadata: Metadata = {
  title: "RAISSA PORTFOLIO",
  description: "my Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EscapeHome />

        <PageTransition />

        <div id="page-content">
          {children}
        </div>
      </body>
    </html>
  );
}