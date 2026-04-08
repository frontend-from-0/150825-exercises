import Image from "next/image";
import Link from "next/link"; // Yönlendirme için Link'i ekledik

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      
      {/* --- EN ÜSTTEKİ YÖNLENDİRME BUTONU --- */}
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          href="/homepage" 
          style={{        
            padding: '10px 20px',       
            borderRadius: '8px',        
            textDecoration: 'none',     
            display: 'inline-block'
          }}
        >
          Homepage Sayfasına Git ➡
        </Link>
      </div>

      <h1>Ana Sayfama Hoş Geldiniz! 📸</h1>
      <p>İşte projeme eklediğim ilk resim:</p>

      <div style={{ marginTop: '20px' }}>
        <Image
          src="/hands1picture.avif" 
          alt="human hands and phone"  
          width={687}             
          height={400} /* ÖNEMLİ: Next.js width yazıldığında height değerini de zorunlu ister. */
        />
      </div>
    </main>
  );
}