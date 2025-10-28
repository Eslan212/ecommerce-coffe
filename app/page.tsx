"use client";
import Link from "next/link";
import Image from "next/image";
import BtnXl from "./components/BtnXl";
import Carta from "./components/Card";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

type Producto = {
  id: number;
  categoria: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};


export default function Home() {



  const [productos, setProductos] = useState<Producto[]>([]);   


  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al leer JSON:", err));
  }, []);

  return (
    <main >
      <section className="relative w-full mx-auto max-w-[1920px] min-h-[400px] max-h-[800px] h-[50vh] md:h-[80vh] flex items-center justify-start">

        <div className="relative w-full h-full flex items-center justify-start">
          <div className="absolute inset-0 z-0">
            <Image
              src="/fondo3.jpg"
              alt="Fondo"
              fill
              priority
              className="object-cover object-center opacity-100 md:rounded-xl"
            />
          </div>

          <div className="relative z-10 flex-col md:flex  items-start justify-center w-full px-8 text-white">
            <div className="max-w-lg p-5">
              <h1 className="text-3xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Savor the <br /> Perfect Brew!
              </h1>
              <p className="hidden md:block mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident pariatur sequi nihil non odit commodi beatae?
              </p>
            </div>

            <div className="flex text-3xl items-center shadow-3xl justify-center ml-0 md:ml-8 mt-4 md:mt-0">
              <Link href="/productos">
                <BtnXl text="Shop Now" wi="auto" he="100px" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-[1920px] mx-auto p-4 bg-[#e0d2bfce]">
        <h2 className="text-center mb-6 text-3xl font-bold">¿Por qué Elegirnos?</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.slice(0,4).map((producto) => (
            <li key={producto.id} className="flex">
              <Carta
                title={producto.name}
                description={producto.description}
                imageUrl={producto.imageUrl}
                btnTitle="Ver más"
              />
            </li>
          ))}
        </ul>
        <Banner/>
      </section>



    </main>
  );
}

