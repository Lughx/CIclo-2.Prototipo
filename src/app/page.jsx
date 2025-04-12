import Image from "next/image";
import Lienzo from "./components/Lienzo";
import Leaderboard from "./components/Leaderboard";

export default function Home() {
  return (
    <div className="grid pb-20 sm:p-20">
      <div className="bg-red-700 w-full p-4 text-white rounded-lg mb-6">
        <div className="text-4xl font-bold">Descubre la imagen</div>
      </div>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col w-full items-center sm:items-start col-span-2">
          <Lienzo />
        </div>
        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
