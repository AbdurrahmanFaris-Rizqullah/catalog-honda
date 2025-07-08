'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
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
            <Link href="/katalog" className="text-gray-800 hover:text-[#E11E26] font-medium transition-colors">
              Katalog
            </Link>
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