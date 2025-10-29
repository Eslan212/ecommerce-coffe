
type BtnProps = {
    text?: string;
    bgColor?: string;
    textColor?: string;
}

export default function Btn({text,bgColor,textColor}: BtnProps) {
    return (
        <button 
        className="mt-6 cursor-pointer hover:bg-[#3a2317] font-semibold rounded-lg shadow-md px-6 py-3 transition-colors"
        style={{
            backgroundColor: bgColor || undefined, 
            color: textColor || undefined
        }}
        >
            {text || "Botón"}
        </button>
    );
}