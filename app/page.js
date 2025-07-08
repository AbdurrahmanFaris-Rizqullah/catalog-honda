import Image from 'next/image';
import Link from 'next/link';
import { colorData } from '@/data/colorData';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[800px] bg-[#E11E26]">
        <Image
          src="/images/hero/banner-1.webp"
          alt="Honda Motorcycles"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#E11E26]/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Selamat Datang di Katalog Honda</h1>
            <p className="text-xl mb-8 drop-shadow">Temukan Motor Honda Impian Anda</p>
            <Link 
              href="/katalog" 
              className="bg-[#E11E26] text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Lihat Katalog
            </Link>
          </div>
        </div>
      </div>

      {/* Motor Unggulan */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#E11E26]">Motor Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vario 160 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
            <Image
              src={colorData['vario-160'].colors[1].image}
              alt={colorData['vario-160'].name}
              width={600}
              height={400}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{colorData['vario-160'].name}</h3>
              <p className="text-gray-600 mb-4">Tampil Gagah dengan Performa Maksimal. Nikmati sensasi berkendara dengan mesin 160cc berteknologi eSP+</p>
              <Link 
                href="/katalog/detail/vario-160" 
                className="inline-flex items-center text-[#E11E26] hover:text-red-700"
              >
                Lihat Detail <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* ADV 160 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
            <Image
              src={colorData['adv-160'].colors[1].image}
              alt={colorData['adv-160'].name}
              width={600}
              height={400}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{colorData['adv-160'].name}</h3>
              <p className="text-gray-600 mb-4">Urban Explorer dengan DNA Petualang. Siap menaklukkan setiap tantangan di jalanan kota</p>
              <Link 
                href="/katalog/detail/adv-160"
                className="inline-flex items-center text-[#E11E26] hover:text-red-700"
              >
                Lihat Detail <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
