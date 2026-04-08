import "./globals.css";

export const metadata = {
  title: "Benim Next.js Projem",
  description: "Next.js ile geliştirdiğim ilk proje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        style={{ fontFamily: 'Arial, sans-serif',  
            backgroundColor: 'white', 
            color: 'black', 
            fontWeight: 'bold',}} 
        className="min-h-full flex flex-col antialiased"
      >
        {children}
      </body>
    </html>
  );
}