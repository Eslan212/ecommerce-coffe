import Btn from "./Btn";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto lg:h-64 bg-[#482b1e] mt-10 text-white overflow-hidden">
      
      {/* 🟤 Primer bloque: ocupa 2 columnas */}
      <div className="lg:col-span-2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl mb-3 font-bold">¡Miércoles de Happy Hours!</h2>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos, iste itaque sunt animi nam expedita corrupti, consequatur accusantium odio nihil nisi! Amet, ab doloremque ad in fuga id vitae!
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Btn text="Ver Carta" bgColor="#b36d4d" textColor="white" />
          <Btn text="Reservar Hora" bgColor="white" textColor="black" />
        </div>
      </div>

      {/* 🟤 Segundo bloque: imagen ocupa toda la celda */}
      <div className="relative w-full h-64 lg:h-full">
        <Image
          src="/promo.jpeg"
          alt="Promoción Happy Hour"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 🟤 Tercer bloque: mini promo */}
      <div className="flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold mb-2 leading-tight">
          Disfruta <br /> tu día
        </h2>
        <p className="text-5xl mb-3 font-bold">$5000</p>
        <Btn text="Ordenar Ahora" bgColor="#b36d4d" textColor="white" />
      </div>
    </div>
  );
}
