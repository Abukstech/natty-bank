 import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Natty Bank - Modern Banking with a Global Perspective",
  description: "Experience modern banking with a global perspective at Natty Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className={poppins.className}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
