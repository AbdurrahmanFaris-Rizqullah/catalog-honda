'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="bg-[#E11E26] h-1"></div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo-honda.png"
              alt="Honda Logo"
              width={66}
              height={22}
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
          
          <div className="flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-[#E11E26] font-medium transition-colors">
              Beranda
            </Link>
            <div className="relative">
              <button 
                className="text-gray-800 hover:text-[#E11E26] font-medium flex items-center transition-colors"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Katalog
                <span className="ml-1">▾</span>
              </button>
              {showDropdown && (
                <ul className="absolute bg-white shadow-xl rounded-md mt-2 py-2 w-40 text-sm border-t-2 border-[#E11E26]">
                  <li><Link href="/katalog?jenis=matic" className="block px-4 py-2 hover:bg-red-50 text-gray-800 hover:text-[#E11E26]">Matic</Link></li>
                  <li><Link href="/katalog?jenis=sport" className="block px-4 py-2 hover:bg-red-50 text-gray-800 hover:text-[#E11E26]">Sport Matic</Link></li>
                  <li><Link href="/katalog?jenis=scoopy" className="block px-4 py-2 hover:bg-red-50 text-gray-800 hover:text-[#E11E26]">Scoopy Series</Link></li>
                </ul>
              )}
            </div>
            <Link href="/kontak" className="text-gray-800 hover:text-[#E11E26] font-medium transition-colors">
              Kontak
            </Link>
            <Link 
              href="/katalog" 
              className="bg-[#E11E26] text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
            >
              Lihat Semua
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}