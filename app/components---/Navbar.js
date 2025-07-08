'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <div className="text-xl font-bold text-red-600">🏍️ MotorKatalog</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link href="/" className="hover:text-red-500">Beranda</Link></li>
        <li><Link href="/katalog" className="hover:text-red-500">Katalog</Link></li>
        <li className="relative">
          <button 
            className="hover:text-red-500" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Jenis ▾
          </button>
          {showDropdown && (
            <ul className="absolute bg-white shadow rounded mt-2 w-32 text-sm z-50">
              <li><Link href="/katalog?jenis=matic" className="block px-4 py-2 hover:bg-red-100">Matic</Link></li>
              <li><Link href="/katalog?jenis=sport" className="block px-4 py-2 hover:bg-red-100">Sport Matic</Link></li>
              <li><Link href="/katalog?jenis=bebek" className="block px-4 py-2 hover:bg-red-100">Scoopy Series</Link></li>
            </ul>
          )}
        </li>
        <li><Link href="/promo" className="hover:text-red-500">Promo</Link></li>
        <li><Link href="/kontak" className="hover:text-red-500">Kontak</Link></li>
      </ul>
    </nav>
  );
}
