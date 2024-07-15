"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbBar from "@/components/items/BreadcrumbBar";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col font-sans">
          <motion.div
            initial={{  y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay:0.5 }}
          >
            <Header />
          {/* <div className="hidden lg:flex justify-center lg:justify-between bg-white py-4 px-10 lg:px-20 font-light text-sm shadow-sm">
            <BreadcrumbBar />
          </div> */}
          </motion.div>

          <motion.main className="flex-grow"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          >{children}</motion.main>
          <Footer />
        </div>
      </body>
    </html>
  );

}