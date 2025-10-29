type BtnXlProps = {
    text: string;
    wi?: string; // opcional
    he?: string; // opcional
  };
  
  export default function BtnXl({ text, wi, he }: BtnXlProps) {
    return (
      <button
        className={`mt-6 cursor-pointer bg-[#482b1e] hover:bg-[#3a2317] text-white font-semibold rounded-lg shadow-md transition-colors`}
        style={{
          width: wi || "auto",
          height: he || "auto",
          padding: "12px 24px",
        }}
      >
        {text}
      </button>
    );
  }
  