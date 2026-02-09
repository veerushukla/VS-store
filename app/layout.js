import React from "react";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/Components/ClientLayout"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { CartProvider } from "./context/cartcontext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTransitionWrapper from "@/Components/PageTransitionWrapper";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce Website Example",
  description: "This is a design of e-commerce website with minimal function like filter serach and cart.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <CartProvider>
            <Navbar className="bg-white text-black p-4 relative"/>
            <PageTransitionWrapper>
              <ClientLayout>
                {children}
              </ClientLayout>
              <Analytics />
            </PageTransitionWrapper>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="dark"
            />
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
