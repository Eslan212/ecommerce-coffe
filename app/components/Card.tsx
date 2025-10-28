import Btn from "./Btn";

type CartaProps = {
  title: string;
  description: string;
  imageUrl: string;
  btnTitle?:string;
};

export default function Carta({ title, description, imageUrl, btnTitle }: CartaProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 flex flex-col justify-between flex-grow text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-[#482b1e] text-[14px] mb-4 line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-center mt-auto">
          <Btn bgColor="#482b1e" text={btnTitle} textColor="white" />
        </div>
      </div>
    </div>
  );
}
