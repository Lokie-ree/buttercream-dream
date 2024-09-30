import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Dream of Buttercream",
  description: "Small business baking dreams come true",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
