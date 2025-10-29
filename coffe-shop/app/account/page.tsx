"use client";

import { useAuth } from "../hooks/AuthProvider";

export default function AccountPage() {
    const { logout } = useAuth();
    return (
        <>
        <button 
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
        >Cerrar sesión</button>
        </>
    );
}