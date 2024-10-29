import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/context/CartContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Dream of Buttercream",
  description: "Small business baking dreams come true",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-100 font-sans`}>
        <CartProvider>
          <Navbar />
          <div className="min-h-screen max-w-screen-2xl">{children}</div>
        </CartProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
