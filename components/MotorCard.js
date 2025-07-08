'use client';
import Image from 'next/image';

export default function MotorCard({ motor }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56">
        <Image
          src={motor.image}
          alt={motor.nama}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{motor.nama}</h3>
          <div className="text-[#E11E26] font-bold">
            Rp {motor.harga}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{motor.deskripsi}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#E11E26]">Spesifikasi Utama</h4>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Mesin: {motor.spesifikasi.mesin}</li>
              <li>• Volume: {motor.spesifikasi.volume}</li>
              <li>• Transmisi: {motor.spesifikasi.transmisi}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#E11E26]">Fitur Unggulan</h4>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              {motor.fiturUtama.map((fitur, idx) => (
                <li key={idx}>• {fitur}</li>
              ))}
            </ul>
          </div>

          <button 
            className="w-full bg-[#E11E26] text-white py-2 rounded-md hover:bg-red-700 transition-colors mt-4"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}