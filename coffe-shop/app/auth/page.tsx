"use client"; // necesario para usar hooks

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";


export default function AuthPage() {
  const router = useRouter();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useAuth(); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const endpoint = isLogin ? "auth/login" : "auth/register";

    try {
      const res = await fetch(`http://localhost:3001/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.access_token) {
        // Login exitoso
        login(data.access_token); // ✅ actualiza el estado global
        setMessage("¡Login exitoso!");
        router.push("/"); // redirige al home
      } else if (data.id) {
        // Registro exitoso
        setMessage("Usuario registrado correctamente. Ahora haz login.");
        setIsLogin(true);
      } else {
        // Error
        setMessage(data.error || "Ocurrió un error.");
      }
    } catch (err) {
      setMessage("Error al conectar con el servidor.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Registro"}
        </h1>

        {message && (
          <p className="mb-4 text-center text-sm text-red-500">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border p-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#482b1e] text-white p-3 rounded font-bold hover:bg-[#b36d4d] transition-colors"
          >
            {isLogin ? "Iniciar sesión" : "Registrarse"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <span
            className="text-[#b36d4d] cursor-pointer font-bold"
            onClick={toggleForm}
          >
            {isLogin ? "Regístrate" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
