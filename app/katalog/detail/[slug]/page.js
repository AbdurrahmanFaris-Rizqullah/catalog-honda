'use client';
import { useState } from 'react';
import Image from 'next/image';

// Pindahkan colorData ke file terpisah
import { colorData } from '@/data/colorData';

export default function DetailPage({ params }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const motorData = colorData[params.slug];

  if (!motorData) {
    return (
      <div className="pt-20 text-center">
        <h1 className="text-2xl text-gray-600">Motor tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">{motorData.name}</h1>

        {/* Color Selection */}
        <div className="flex gap-4 mb-8">
          {motorData.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`p-2 rounded-lg transition-all ${
                selectedColor === index 
                  ? 'ring-2 ring-[#E11E26] scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="relative w-24 h-24">
                <Image
                  src={color.image}
                  alt={color.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-center mt-2">{color.name}</p>
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative h-[500px] mb-8">
          <Image
            src={motorData.colors[selectedColor].image}
            alt={motorData.colors[selectedColor].name}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}