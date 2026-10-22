import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Page metadata (title and description for browser tab and search engines)
export const metadata: Metadata = {
  title: "Campus Directory - Student Project",
  description: "A simple, beginner-friendly student directory built with Next.js and TypeScript.",
};

/**
 * RootLayout Component
 * Wraps every page in the application.
 * Contains the top Navbar, main page content ({children}), and bottom Footer.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar at the top of every page */}
        <Navbar />

        {/* The active page content renders here */}
        <main>{children}</main>

        {/* Footer at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
