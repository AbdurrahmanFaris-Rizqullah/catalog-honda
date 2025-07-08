'use client';
import { useState } from 'react';
import MotorCard from '@/components/MotorCard';

const motorData = {
    matic: [
        {
            nama: "New BeAT Sporty",
            image: "/images/motor/beat/beat-cbs-2.jpeg",
            harga: "20.850.000",
            spesifikasi: {
                dimensi: "1876 x 669 x 1080 mm",
                beratKosong: "88 kg (CBS), 87 kg (Deluxe & Smart Key)",
                kapasitasTangki: "4.2 L",
                mesin: "4-Langkah, SOHC, eSP",
                transmisi: "Otomatis, V-Matic",
                banDepan: "80/90 - 14 M/C 40P Tubeless",
                banBelakang: "90/90 - 14 M/C 46P Tubeless",
                rangka: "Tulang Punggung – eSAF",
                volume: "109,5cc"
            },
            fiturUtama: [
                "Power Charger",
                "Sistem Pencahayaan LED",
                "Bagasi Luas 12L",
                "Tuas Pengunci Rem",
                "Combined Digital Panel Meter",
                "Standar Samping Otomatis",
                "Functional Hook"
            ],
            deskripsi: "Motor matic ekonomis dengan performa handal dan irit bahan bakar"
        },
        {
            nama: "New BeAT Sporty (Smart Key)",
            image: "/images/motor/beat/beat-deluxe smart key-1.jpeg",
            harga: "22.850.000",
            spesifikasi: {
                dimensi: "1876 x 669 x 1080 mm",
                beratKosong: "88 kg (CBS), 87 kg (Deluxe & Smart Key)",
                kapasitasTangki: "4.2 L",
                mesin: "4-Langkah, SOHC, eSP",
                transmisi: "Otomatis, V-Matic",
                banDepan: "80/90 - 14 M/C 40P Tubeless",
                banBelakang: "90/90 - 14 M/C 46P Tubeless",
                rangka: "Tulang Punggung – eSAF",
                volume: "109,5cc"
            },
            fiturUtama: [
                "Power Charger",
                "Sistem Pencahayaan LED",
                "Bagasi Luas 12L",
                "Tuas Pengunci Rem",
                "Anti theft Alarm System",
                "Smart Key System",
                "Combined Digital Panel Meter",
                "Standar Samping Otomatis",
                "Functional Hook"
            ],
            deskripsi: "Motor matic ekonomis dengan performa handal dan irit bahan bakar"
        }
    ],
    maticSport: [
        {
            nama: "Vario 160",
            image: "/images/motor/vario/vario-1.jpeg",
            harga: "26.890.000",
            spesifikasi: {
                dimensi: "1929 x 679 x 1088 mm",
                beratKosong: "115 kg (CBS), 117 kg (ABS)",
                kapasitasTangki: "5,5 liter",
                mesin: "4 Langkah, 4 Katup, eSp+",
                transmisi: "Otomatis, V-Matic",
                banDepan: "100/80 - 14 M/C Tubeless",
                banBelakang: "120/70 - 14 M/C Tubeless",
                rangka: "Underbone - eSAF",
                volume: "156,9cc"
            },
            fiturUtama: [
                "All LED Lighting System",
                "Mesin 160 CC ESP+",
                "Rear Disc Brake",
                "Full Digital Panel Meter",
                "New Cast Wheel Design With Wider Tire",
                "Smartkey system",
                "Anti-Lock Braking System",
                "USB Charger in Console Box",
                "Bagasi Luas"
            ],
            deskripsi: "Skutik premium dengan performa maksimal dan teknologi canggih"
        },
        {
            nama: "PCX 160",
            image: "/images/motor/pcx/pcx-roadsync-1.jpeg",
            harga: "31.990.000",
            spesifikasi: {
                dimensi: "1936 x 742 x 1123 mm",
                beratKosong: "132 kg (CBS/ABS), 133 kg (RoadSync)",
                kapasitasTangki: "8,1 liter",
                mesin: "4-Langkah, 4-Valve, eSP+",
                transmisi: "Otomatis, V-Matic",
                banDepan: "110/70 - 14 M/C Tubeless",
                banBelakang: "130/70 - 13 M/C Tubeless",
                rangka: "Double Cradle",
                volume: "156,9cc"
            },
            fiturUtama: [
                "USB Type-C Charger",
                "New LED Headlight Design",
                "New LED Taillight Design",
                "Anti-Lock Braking System (ABS)",
                "30 Liter Extra Large Luggage Box",
                "Honda Smart Key System",
                "New Handle Bar Cover"
            ],
            deskripsi: "Skutik premium dengan desain mewah dan fitur modern"
        },
        {
            nama: "ADV 160",
            image: "/images/motor/adv/adv-1.jpeg",
            harga: "36.200.000",
            spesifikasi: {
                dimensi: "1950 x 763 x 1196 mm",
                beratKosong: "133 Kg",
                kapasitasTangki: "8,1 Liter",
                mesin: "4-Langkah, 4-Katup, eSP+",
                transmisi: "Otomatis, V-Matic",
                banDepan: "110/80-14M/C, Tubeless",
                banBelakang: "130/70-13M/C, Tubeless",
                rangka: "Double Cradle",
                volume: "156,9cc"
            },
            fiturUtama: [
                "New USB Charger in Console Box",
                "Twin Subtank Rear Suspension",
                "ABS & Wavy Disc Break",
                "Wide Tire with Semi Dual Purpose Pattern",
                "LED Tailight with ESS",
                "New Higher Adjustable Windscreen",
                "Honda Smart Key System",
                "New Full Digital Panel Meter",
                "LED Headlight with DRL"
            ],
            deskripsi: "Motor adventure skutik dengan karakter tangguh dan stylish"
        }
    ],
    scoopy: [
        {
            nama: "All New Scoopy",
            image: "/images/motor/scoopy/scoopy-1.jpeg",
            harga: "21.725.000",
            spesifikasi: {
                dimensi: "1869 x 693 x 1075 mm",
                beratKosong: "94 kg (STD), 93 kg (Smart Key)",
                kapasitasTangki: "4,2 liter",
                mesin: "4-Langkah, SOHC, eSP",
                transmisi: "Otomatis, V-Matic",
                banDepan: "100/90 – 12 59J (Tubeless)",
                banBelakang: "110/90 – 12 64J (Tubeless)",
                rangka: "Underbone - eSAF",
                volume: "109,5cc"
            },
            fiturUtama: [
                "New LED Crystal Block Headlight",
                "Digital Panel Meter",
                "New Taillight & Winker Design",
                "USB Type-C Charger in Console Box",
                "Functional Hook",
                "Console Box",
                "Honda Smart Key System"
            ],
            deskripsi: "Motor retro modern dengan gaya klasik dan teknologi terkini"
        },
        {
            nama: "Stylo 160",
            image: "/images/motor/stylo/stylo-1.jpeg",
            harga: "33.900.000",
            spesifikasi: {
                dimensi: "1.886 x 706 x 1.133 mm (ABS)",
                beratKosong: "118 kg (ABS), 115 kg (CBS)",
                kapasitasTangki: "5 Liter",
                mesin: "4 Langkah, 4 Katup, eSP+",
                transmisi: "Otomatis, V-Matic",
                banDepan: "110/90 - 12 M/C Tubeless",
                banBelakang: "130/80 - 12 M/C Tubeless",
                rangka: "Underbone - eSAF",
                volume: "156,9cc"
            },
            fiturUtama: [
                "New All LED Lighting System",
                "Pop-up Center Hook",
                "Anti Lock Braking System",
                "New USB Charger in Center Console",
                "Honda Smartkey System",
                "New Full Digital Panel Meter",
                "Ban & Velg 12 Inci"
            ],
            deskripsi: "Motor matic premium dengan gaya modern dan fitur canggih"
        },
    ]
};

export default function KatalogPage() {
    const [activeFilter, setActiveFilter] = useState('Matic');

    return (
        <div className="pt-20">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Pilih Motor Favorit Anda</h1>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-8 mb-12">
                    {['Matic', 'Sport', 'Cub', 'EV', 'BigBike'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`pb-2 px-4 font-medium transition-all ${activeFilter === filter
                                    ? 'text-[#E11E26] border-b-2 border-[#E11E26]'
                                    : 'text-gray-600 hover:text-[#E11E26]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}

                </div>
                {/* Matic Sport Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-[#E11E26]">New BeAT Sporty Series</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {motorData.matic.map((motor, index) => (
                            <MotorCard key={`sport-${index}`} motor={motor} />
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