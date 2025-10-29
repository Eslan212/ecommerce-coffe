"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "../types/nav-links";
import NavRedes from "../types/nav-redes";




export default function Header() {
    const [isOpen, setIsOpen] = useState(false);



    return (
            <>
            <header className="w-full bg-[#FAEBD7] shadow-md">

                <div className="bg-[#482b1e] text-[13px] ">
                    <div className="max-w-[1200px] mx-auto flex justify-between items-center text-white text-center p-3">
                        <p>Café que enciende tu mañana.</p>
                        <NavRedes/>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto text-[#482b1e] p-4 flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"}>
                    <Image
                        src="/logo.png"
                        alt="Coffee Shop Logo"
                        width={100}
                        height={100}
                    />
                </Link>

                {/* Menú de escritorio */}
                
                <ul className="hidden md:flex gap-6">
                 <NavLinks/>
               </ul>

                {/* Botón hamburguesa móvil */}
                <button
                    className="md:hidden  cursor-pointer text-[#482b1e] focus:outline-none text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                </div>

                {/* Menú móvil desplegable */}
                {isOpen && (
                <ul className=" absolute flex items-end right-0 top-[150px] opacity-80 z-50 w-auto flex-col gap-2 md:hidden bg-[#FAEBD7] p-4 max-w-[1200px] mx-auto">
                     <NavLinks/>     
                </ul>
                )}
            </header>
            </>

    )
}