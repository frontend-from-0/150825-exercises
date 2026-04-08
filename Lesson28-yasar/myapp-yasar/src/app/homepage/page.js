import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const myFont = Montserrat({ subsets: ['latin'] });
export default function HomePage() {
  return (
    <main className={myFont.className} style={{ padding: '2rem' }}>
      <h1>Ana Sayfaya Hoş Geldiniz! 🚀</h1>
      <p>Bu, Next.js projemdeki ilk özel sayfam.</p>
      
      <hr style={{ margin: '2rem 0' }} />

      <h2>Önyazı</h2>
      <ul>
        <li>Yaklaşık 7 aydır yazılım eğitimi alıyorum.Next js i seviyorum.</li>
      </ul>

      {/* Ana sayfaya dön */}
      <div style={{ margin: '2px' }}>
        <Link href="/" style={{ color: 'black', textDecoration: 'underline' }}>
          Ana Sayfa
        </Link>
      </div>
    </main>
  );
}