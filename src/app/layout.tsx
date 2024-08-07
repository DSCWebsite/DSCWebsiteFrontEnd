import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/header";


export const metadata: Metadata = {
  title: "Data Science Club",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <link rel="icon" href="favicon-16x16.png" sizes="any" />
        <HeaderComponent  />
        {children}
      </body>
    </html>
  );
}
