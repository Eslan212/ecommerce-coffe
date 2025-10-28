import Link from "next/link";
import Image from "next/image";
import BtnXl from "./components/BtnXl";
import Carta from "./components/Card";



const productos = [
  {
    id: 1,
    name: "Café Clásico",
    description:
      "Café de alta calidad, recién molido y tostado para ofrecerte el mejor sabor en cada taza.",
    imageUrl: "/productos/cafe1.jpg",
    price: 9.99,
  },
  {
    id: 2,
    name: "Café Espresso",
    description:
      "Intenso y aromático, perfecto para los amantes del café fuerte y concentrado.",
    imageUrl: "/productos/cafe2.jpeg",
    price: 12.99,
  },
  {
    id: 3,
    name: "Café Descafeinado",
    description:
      "Disfruta del sabor del café sin la cafeína, ideal para cualquier momento del día.",
    imageUrl: "/productos/cafe3.jpeg",
    price: 10.99,
  },
];

export default function Home() {
  return (
    <main >
      <section className="relative w-full mx-auto max-w-[1200px] min-h-[400px] max-h-[800px] h-[50vh] md:h-[80vh] flex items-center justify-start">

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




      <section className="max-w-[1200px] mx-auto p-8 bg-[#faebd7ce]">
        <h2 className="text-center mb-5 p-3 text-3xl font-bold">¿Por qué Elegirnos?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {productos.map((producto) => (
            <li key={producto.id} className="w-full flex justify-center">
              <Carta
                title={producto.name}
                description={producto.description}
                imageUrl={producto.imageUrl}
              />
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
