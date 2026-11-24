# Katalog Motor Honda

Aplikasi web katalog motor Honda berbasis **Next.js App Router** yang menampilkan daftar lengkap model motor matic Honda beserta spesifikasi, harga, fitur unggulan, dan pilihan warna. Pengguna dapat menjelajahi katalog, melihat detail setiap motor, serta menghubungi dealer langsung melalui WhatsApp.

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 15.3.5 (App Router) |
| UI Library | [React](https://react.dev/) 19 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 + `@tailwindcss/postcss` |
| Ikon | [React Icons](https://react-icons.github.io/react-icons/) v5.5.0 (ikon WhatsApp) |
| Bahasa | JavaScript (JSX) |
| Runtime | Node.js |
| Package Manager | npm |

> Tidak ada database, backend, atau API eksternal — semua data bersifat statis dan didefinisikan langsung di dalam kode.

---

## Fitur Utama

- **Halaman Beranda** — Hero banner full-height dengan CTA menuju katalog, serta seksi *Motor Unggulan* yang menampilkan Vario 160 dan ADV 160.
- **Halaman Katalog** — Menampilkan 7 model motor dalam tiga seri: *New BeAT Sporty Series*, *Matic Sport* (Vario 160, PCX 160, ADV 160), dan *Retro Matic Series* (All New Scoopy, Stylo 160). Dilengkapi filter tab per kategori (Matic, Sport, Cub, EV, BigBike).
- **Kartu Motor** — Setiap model ditampilkan dengan gambar, harga (OTR), deskripsi singkat, spesifikasi teknis lengkap (dimensi, mesin, transmisi, ban, rangka), dan daftar fitur unggulan.
- **Halaman Detail Motor** — Pemilihan warna interaktif; pengguna dapat mengklik thumbnail varian warna untuk melihat foto motor dalam warna yang dipilih pada tampilan gambar besar.
- **Halaman Kontak** — Tombol *Chat via WhatsApp* yang membuka percakapan langsung dengan nomor dealer.
- **Navigasi** — Navbar tetap (*fixed*) di atas halaman dengan logo Honda dan tautan ke semua halaman.

---

## Struktur Proyek

```
catalog-honda/
├── app/
│   ├── favicon.ico
│   ├── globals.css                  # Style global + konfigurasi Tailwind v4
│   ├── layout.js                    # Root layout (Navbar, metadata)
│   ├── page.js                      # Halaman beranda (/)
│   ├── katalog/
│   │   ├── page.js                  # Halaman katalog (/katalog)
│   │   └── detail/
│   │       └── [slug]/
│   │           └── page.js          # Halaman detail motor (/katalog/detail/:slug)
│   └── kontak/
│       └── page.js                  # Halaman kontak (/kontak)
├── components/
│   ├── Navbar.js                    # Komponen navigasi
│   └── MotorCard.js                 # Komponen kartu motor (reusable)
├── data/
│   └── colorData.js                 # Data varian warna & foto per motor (keyed by slug)
├── public/
│   └── images/
│       ├── hero/                    # Banner hero (banner-1.webp s/d banner-8.webp)
│       ├── logo/                    # logo-honda.png
│       └── motor/                   # Foto motor per model (adv, beat, pcx, scoopy, stylo, vario)
├── jsconfig.json                    # Path alias: @/* → ./*
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## Prasyarat

Pastikan perangkat sudah terinstal:

- **Node.js** versi 18 ke atas — unduh di [nodejs.org](https://nodejs.org/)
- **npm** (sudah termasuk bersama Node.js)

---

## Instalasi & Menjalankan Proyek

### 1. Clone repositori

```bash
git clone https://github.com/AbdurrahmanFaris-Rizqullah/catalog-honda.git
cd catalog-honda
```

### 2. Install dependensi

```bash
npm install
```

### 3. Jalankan server pengembangan

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

### 4. Build untuk produksi

```bash
npm run build
npm run start
```

> Proyek ini tidak memerlukan file `.env` — tidak ada variabel lingkungan yang perlu dikonfigurasi.

---

## Rute Aplikasi

| URL | Halaman | Keterangan |
|---|---|---|
| `/` | Beranda | Hero banner + motor unggulan |
| `/katalog` | Katalog | Daftar semua model motor beserta spesifikasi & harga |
| `/katalog/detail/:slug` | Detail Motor | Pilihan varian warna & foto motor |
| `/kontak` | Kontak | Tombol WhatsApp untuk menghubungi dealer |

### Daftar Slug Motor yang Tersedia

| Slug | Nama Motor |
|---|---|
| `new-beat-sporty` | New BeAT Sporty |
| `new-beat-sporty-(smart-key)` | New BeAT Sporty (Smart Key) |
| `vario-160` | All New Vario 160 |
| `pcx-160` | PCX 160 |
| `adv-160` | ADV 160 |
| `all-new-scoopy` | All New Scoopy |
| `stylo-160` | Stylo 160 |

Contoh URL detail: `http://localhost:3000/katalog/detail/pcx-160`

---

## Lisensi

Proyek ini dibuat untuk keperluan portofolio dan demonstrasi. Tidak berafiliasi secara resmi dengan PT Astra Honda Motor.
