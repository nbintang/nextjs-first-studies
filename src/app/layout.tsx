"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/fragments/Navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/fragments/Sidebar";

const inter = Inter({ subsets: ["latin"] });


const navRoutes = ["/login", "/register"];

const sidebarRoutes = ["/dashboard", "/dashboard/products"];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <SessionProvider>
            {sidebarRoutes.includes(pathname) && <Sidebar />}
            <div className="flex flex-col flex-grow">
              {!navRoutes.includes(pathname) && <Navbar />}
              {children}
            </div>
            <Toaster />
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
