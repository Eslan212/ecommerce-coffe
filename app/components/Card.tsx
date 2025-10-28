type CartaProps = {
    title: string;
    description: string;
    imageUrl: string;
  };
  
  export default function Carta({ title, description, imageUrl }: CartaProps) {
    return (
      <div className="w-[320px] h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
  
        <div className="p-10 flex flex-col justify-between flex-grow text-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-[#482b1e] text-[12px] mb-3 line-clamp-3">{description}</p>
          </div>
  
          <div className="flex justify-center mt-auto">
            <button className="bg-[#482b1e] hover:bg-[#3a2317] text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Visualizar Más
            </button>
          </div>
        </div>
      </div>
    );
  }
  