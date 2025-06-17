import "./globals.scss";
import Header from "../components/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MGTE 29 Class Profile",
  description: "Welcome! Explore the MGTE 29 class profile page and get to know a little more about us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
