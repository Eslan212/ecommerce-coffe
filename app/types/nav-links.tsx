import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Productos" },
    { href: "/cart", label: "Carrito" },
    { href: "/account", label: "Mi Cuenta" },
];

export default function NavLinks(){
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