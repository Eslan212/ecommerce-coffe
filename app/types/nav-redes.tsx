import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const redes = [
  {
    href: "https://www.facebook.com/tu-pagina-de-facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.twitter.com/tu-cuenta-de-twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.instagram.com/tu-cuenta-de-instagram",
    icon: <FaInstagram />,
  },
];

export default function NavRedes() {
  return (
    <ul className="flex gap-4 items-center">
        <p className="mr-2 p-1">Siguenos:</p>
      {redes.map((red) => (
        <li key={red.href}>
          <a
            href={red.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#FAEBD7] justify-center w-8 h-8 rounded-full bg-[#c28d5e] hover:bg-yellow-400 text-[#482b1e] hover:text-white transition-all"
          >
            {red.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
