'use client';
import Image from 'next/image';
import Link from 'next/link';

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
              <li>• Dimensi: {motor.spesifikasi.dimensi}</li>
              <li>• Berat Kosong: {motor.spesifikasi.beratKosong}</li>
              <li>• Kapasitas Tangki: {motor.spesifikasi.kapasitasTangki}</li>
              <li>• Mesin: {motor.spesifikasi.mesin}</li>
              <li>• Volume: {motor.spesifikasi.volume}</li>
              <li>• Transmisi: {motor.spesifikasi.transmisi}</li>
              <li>• Ban Depan: {motor.spesifikasi.banDepan}</li>
              <li>• Ban Belakang: {motor.spesifikasi.banBelakang}</li>
              <li>• Rangka: {motor.spesifikasi.rangka}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#E11E26]">Fitur Unggulan</h4>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              {motor.fiturUtama.map((fitur, index) => (
                <li key={index}>• {fitur}</li>
              ))}
            </ul>
          </div>

          <Link 
            href={`/katalog/detail/${motor.nama.toLowerCase().replace(/\s+/g, '-')}`}
            className="block w-full bg-[#E11E26] text-white text-center py-2 rounded-md hover:bg-red-700 transition-colors mt-4"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
}