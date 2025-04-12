import Image from "next/image";
import Lienzo from "./components/Lienzo";

export default function Home() {
  return (
    <div className=" grid grid-rows-[5px_1fr_5px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col row-start-2 items-center sm:items-start">
        <Lienzo />
      </main>
    </div>
  );
}
