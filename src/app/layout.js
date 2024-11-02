import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/context/CartContext";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

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
      <Head>
        <meta property="og:title" content="I Dream of Buttercream" />
        <meta
          property="og:description"
          content="I Dream of Buttercream: Bringing your sweetest dreams to life with delightful baked goods, crafted with love. A cozy brand for those who believe in the magic of buttercream."
        />
        <meta
          property="og:image"
          content="https://buttercream-dream.vercel.app/assets/brandlogo_3000x3000.png"
        />
        <meta
          property="og:url"
          content="https://buttercream-dream.vercel.app"
        />
        <meta property="og:type" content="website" />
      </Head>
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
