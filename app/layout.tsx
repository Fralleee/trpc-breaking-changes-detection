import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TrpcProvider from "@/_trpc/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRPC Breaking Changes Detection",
  description: "",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
