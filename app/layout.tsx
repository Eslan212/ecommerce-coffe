import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { inter } from "./features/fonts";
import { montserrat } from "./features/fonts";
export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Tienda de café destinada a los amantes del cacao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* <body className={`${inter.className} antialiased`}> */}
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
