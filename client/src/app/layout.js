import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext"; // Import CartProvider
import Navbar from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Manager",
  description: "Generated by create next app",
};

export default function DefaultLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
