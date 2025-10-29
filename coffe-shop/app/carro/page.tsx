import { useAuth } from "../hooks/AuthProvider"
import { useEffect } from "react"

export default function CarroPage() {
    
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (isAuthenticated === false) {
            window.location.href = "/account";
        }
    }, [isAuthenticated]);

    if (isAuthenticated == null){
        return <p className="text-center mt-10">Cargando...</p>;
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
            <h1 className="text-3xl font-bold">Carro de Compras</h1>
        </div>
    )
}