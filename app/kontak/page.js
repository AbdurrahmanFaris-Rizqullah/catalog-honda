import { FaWhatsapp } from 'react-icons/fa';

export default function KontakPage() {
  const waNumber = "6285649670396"; 
  const waLink = `https://wa.me/${waNumber}`;

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Hubungi Kami</h1>
          <p className="text-gray-600 mb-8">
            Tertarik dengan motor Honda? Hubungi kami sekarang untuk informasi lebih lanjut
          </p>
          
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}