"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Button from "@/components/Buttons";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const handleButtonClick = () => {
    console.log("hello");
  };
  return (
    <html lang="en">
      <body className="layout">
        <div className="d-flex flex-column">
          <Navbar />
          <Sidebar />
          <main className="flex-grow-1 p-4">
            <Button onClick={handleButtonClick}>Button 1</Button>
            <Button onClick={handleButtonClick}>Button 2</Button>
            <Button onClick={handleButtonClick}>Button 3</Button>
          </main>
        </div>
        {children}
      </body>
    </html>
  );
}
