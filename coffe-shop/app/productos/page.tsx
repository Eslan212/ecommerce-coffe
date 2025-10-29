"use client";

import { useEffect, useState } from "react";
import Carta from "../components/Card";
import BtnXl from "../components/BtnXl";

type Producto = {
  id: number;
  categoria: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtro, setFiltro] = useState<string>("Todos");

  useEffect(() => {
    fetch("/productos.json") // Asegúrate que tu JSON está en public/data/productos.json
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al leer JSON:", err));
  }, []);

  // Filtra los productos según la categoría seleccionada
  const productosFiltrados =
    filtro === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === filtro);

  // Lista de categorías únicas
  const categorias = ["Todos", "Café", "Chocolate", "Paste"];

  return (
    <main className="max-w-[1920px] mx-auto p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Nuestros Productos
      </h1>

      {/* 🔹 Botones de filtro */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition 
              ${filtro === cat ? "bg-[#482b1e] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 Grid de productos */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <li key={producto.id} className="flex w-full justify-center">
            <Carta
              title={producto.name}
              description={producto.description}
              imageUrl={producto.imageUrl}
              btnTitle="Comprar"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
