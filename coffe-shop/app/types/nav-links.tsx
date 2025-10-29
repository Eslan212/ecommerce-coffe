"use client";
import Link from "next/link";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

export default function NavLinks(){
  
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      // Fuerza re-render cuando el token cambia en localStorage
    }, [isAuthenticated])
    
    const links = isAuthenticated
    ? [
        { href: "/", label: "Home" },
        { href: "/productos", label: "Productos" },
        { href: "/cart", label: "Carrito" },
        { href: "/account", label: "Mi Cuenta" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/productos", label: "Productos" },
        { href: "/auth", label: "Iniciar Sesión" },
      ];  
    return (<>
       { links.map((link) =>(
          <Link key={link.href} href={link.href} className="hover:text-yellow-400 transition-colors">
          {link.label}
          </Link>
        ))
      }
      </>
    )
    
}