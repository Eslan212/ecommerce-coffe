"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "../types/nav-links";
import NavRedes from "../types/nav-redes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAEBD7] shadow-md">
      {/* Barra superior */}
      <div className="bg-[#482b1e] text-[13px]">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center text-white text-center p-3">
          <p>Café que enciende tu mañana.</p>
          <NavRedes />
        </div>
      </div>

      {/* Barra principal */}
      <div className="max-w-[1920px] mx-auto text-[#482b1e] p-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Coffee Shop Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex gap-6">
          <NavLinks />
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden cursor-pointer text-[#482b1e] focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <ul
        className={`md:hidden absolute right-0 top-[150px] w-auto max-w-[1200px] mx-auto flex flex-col gap-2 bg-[#FAEBD7] p-4 transition-transform transition-opacity duration-300 ease-in-out z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <NavLinks />
      </ul>
    </header>
  );
}
