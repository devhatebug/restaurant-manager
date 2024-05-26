import React from "react";
import SiderBarAdminPage from "@/components/siderbarAdminPage";
import { Inter } from "next/font/google";
import "./admin.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Administrator",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex sm:justify-center justify-start flex-wrap items-center">
            <SiderBarAdminPage />
            <div className="container">
                {children}
            </div>
        </div>
    </body>
    </html>
  );
}
