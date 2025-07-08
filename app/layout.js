import Navbar from '@/components/Navbar';
import "./globals.css";

export const metadata = {
  title: 'Katalog Motor Honda',
  description: 'Katalog motor matic, Matic Sport, dan Scoopy Series terbaru.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
