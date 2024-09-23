import { Inter } from "next/font/google";
import "./globals.css";
import Navbar2 from "./components/ui/Navbar2/Navbar2";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Dream of Buttercream",
  description: "Small business baking dreams come true",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full`}>
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
