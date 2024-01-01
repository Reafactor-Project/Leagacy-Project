"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopHeader from "../app/home/TopHeader";
import Footer from "../app/home/Footer";
import Header from "./home/Header";
import { IdentityProvider } from "../app/AuthorContext/IdentityContext";

const inter = Inter({ subsets: ["latin"] });

interface MainLayoutProps {
  children: React.ReactNode;
  headerProps: {
    value: number;
    user: any;
  };
}

export default function MainLayout({ children, headerProps }: MainLayoutProps) {
  return (
    <IdentityProvider>
      <html lang="en">
        <body>
          <TopHeader />
          <Header {...headerProps} />
          {children}
          <Footer />
        </body>
      </html>
    </IdentityProvider>
  );
}
