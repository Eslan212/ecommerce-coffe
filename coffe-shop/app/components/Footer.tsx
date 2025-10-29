import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#482b1e] text-white py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo o título */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          SavorCoffe
        </div>

        {/* Enlaces */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Empresa</span>
            <a href="#" className="hover:underline">Acerca de</a>
            <a href="#" className="hover:underline">Carreras</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Soporte</span>
            <a href="#" className="hover:underline">Contacto</a>
            <a href="#" className="hover:underline">Preguntas frecuentes</a>
            <a href="#" className="hover:underline">Política de privacidad</a>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-300 mt-8 text-sm">
        &copy; {new Date().getFullYear()} SavorCoffe. Todos los derechos reservados.
      </div>
    </footer>
  );
}
