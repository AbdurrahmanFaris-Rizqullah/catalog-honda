import MotorCard from '@/components/MotorCard';

const motorData = {
  matic: [
    {
      nama: "New BeAT Sporty",
      image: "/images/motor/beat-sporty.jpg",
      harga: "20.850.000",
      spesifikasi: {
        mesin: "4-Langkah, SOHC, eSP",
        volume: "109,5cc",
        transmisi: "Otomatis, V-Matic"
      },
      fiturUtama: [
        "Power Charger",
        "Sistem Pencahayaan LED",
        "Bagasi Luas 12L"
      ],
      deskripsi: "Motor matic ekonomis dengan performa handal dan irit bahan bakar"
    },
    {
        nama: "BeAT Smart Key",
        image: "/images/motor/beat-sporty.jpg",
        harga: "22.850.000",
        spesifikasi: {
          mesin: "4-Langkah, SOHC, eSP",
          volume: "109,5cc",
          transmisi: "Otomatis, V-Matic"
        },
        fiturUtama: [
          "Power Charger",
          "Sistem Pencahayaan LED",
          "Bagasi Luas 12L"
        ],
        deskripsi: "Motor matic ekonomis dengan performa handal dan irit bahan bakar"
      }
  ],
  maticSport: [
    {
      nama: "Vario 160",
      image: "/images/motor/vario-160.jpg",
      harga: "26.890.000",
      spesifikasi: {
        mesin: "4 Langkah, 4 Katup, eSp+",
        volume: "156,9cc",
        transmisi: "Otomatis, V-Matic"
      },
      fiturUtama: [
        "All LED Lighting System",
        "Mesin 160 CC ESP+",
        "Smartkey system"
      ],
      deskripsi: "Skutik premium dengan performa maksimal dan teknologi canggih"
    },
    {
      nama: "ADV 160",
      image: "/images/motor/adv-160.jpg",
      harga: "36.200.000",
      spesifikasi: {
        mesin: "4-Langkah, 4-Katup, eSP+",
        volume: "156,9cc",
        transmisi: "Otomatis, V-Matic"
      },
      fiturUtama: [
        "LED Lighting System",
        "Honda SMART Key System",
        "Wide Step Floor"
      ],
      deskripsi: "Motor adventure skutik dengan karakter tangguh dan stylish"
    },
    {
      nama: "PCX 160",
      image: "/images/motor/pcx-160.jpg",
      harga: "31.990.000",
      spesifikasi: {
        mesin: "4-Langkah, 4-Valve, eSP+",
        volume: "156,9cc",
        transmisi: "Otomatis, V-Matic"
      },
      fiturUtama: [
        "Honda SMART Key System",
        "Full Digital Panel Meter",
        "USB Charger Type-C"
      ],
      deskripsi: "Skutik premium dengan desain mewah dan fitur modern"
    }
  ],
  scoopy: [
    {
      nama: "All New Scoopy",
      image: "/images/motor/scoopy.jpg",
      harga: "21.725.000",
      spesifikasi: {
        mesin: "4-Langkah, SOHC, eSP",
        volume: "109,5cc",
        transmisi: "Otomatis, V-Matic"
      },
      fiturUtama: [
        "LED Crystal Eye",
        "Digital Panel Meter",
        "USB Charger Type-C"
      ],
      deskripsi: "Motor retro modern dengan gaya klasik dan teknologi terkini"
    },
    {
        nama: "Stylo 160",
        image: "/images/motor/scoopy.jpg",
        harga: "21.725.000",
        spesifikasi: {
          mesin: "4-Langkah, SOHC, eSP",
          volume: "109,5cc",
          transmisi: "Otomatis, V-Matic"
        },
        fiturUtama: [
          "LED Crystal Eye",
          "Digital Panel Meter",
          "USB Charger Type-C"
        ],
        deskripsi: "Motor retro modern dengan gaya klasik dan teknologi terkini"
      }
  ]
};

export default function KatalogPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Katalog Motor Honda</h1>

        {/* Matic Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#E11E26]">Motor Matic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorData.matic.map((motor, index) => (
              <MotorCard key={`matic-${index}`} motor={motor} />
            ))}
          </div>
        </section>

        {/* Matic Sport Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#E11E26]">Matic Sport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorData.maticSport.map((motor, index) => (
              <MotorCard key={`sport-${index}`} motor={motor} />
            ))}
          </div>
        </section>

        {/* Scoopy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#E11E26]">Retro Matic Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorData.scoopy.map((motor, index) => (
              <MotorCard key={`scoopy-${index}`} motor={motor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}