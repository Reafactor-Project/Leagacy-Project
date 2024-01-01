"use client";
// import React from "react";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { IdentityProvider } from "../app/AuthorContext/IdentityContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IdentityProvider>{children}</IdentityProvider>
      </body>
    </html>
  );
}
