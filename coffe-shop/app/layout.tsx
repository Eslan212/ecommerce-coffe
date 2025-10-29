import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { inter } from "./features/fonts";
import { montserrat } from "./features/fonts";
import { AuthProvider } from "./hooks/AuthProvider"; // <-- importa tu provider

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
      <body className={`${montserrat.variable} antialiased`}>
        <AuthProvider> {/* <-- envuelves todo aquí */}
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
