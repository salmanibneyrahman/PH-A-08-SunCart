import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "Your one-stop shop for summer essentials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}