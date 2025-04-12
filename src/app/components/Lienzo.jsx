"use client"
import Image from "next/image"
import { useState } from "react";
const gridSize = 3;

export default function Lienzo() {
    const totalTiles = gridSize * gridSize;
    const [unlockedTiles, setUnlockedTiles] = useState(
        Array(totalTiles).fill(false)
    );

    const handleClick = (index) => {
        const updated = [...unlockedTiles];
        updated[index] = true;
        setUnlockedTiles(updated);
    };
    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="relative w-full rounded-lg overflow-hidden">
                <Image
                    src="/fondo.jpg"
                    alt="Imagen cubierta"
                    width={1000}
                    height={1000}
                    className="object-cover w-full rounded-lg"
                />

                <div
                    className={`absolute inset-0 grid grid-cols-${gridSize} grid-rows-${gridSize}`}
                >
                    {unlockedTiles.map((isUnlocked, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`transition-all duration-500 cursor-pointer border border-gray-600/10 ${isUnlocked ? "bg-transparent" : "bg-gray-800"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}//min-h-screen
{/* <div>
            <div className="bg-blue-200 w-[1000px] h-[1000px] grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            </div>
        </div> */}