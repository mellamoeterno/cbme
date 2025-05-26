import Image from "next/image";
import Link from "next/link";

export default function DesktopComponent() {
  const image = [
  '/conjunto/conjunto1.jpeg',
  '/conjunto/conjunto2.jpeg',
  '/conjunto/conjunto3.jpeg',
  '/conjunto/conjunto4.jpeg',
  '/conjunto/conjunto5.jpeg',
  '/conjunto/conjunto1.jpeg',
];
const productData = [
  {
    name: 'Conjunto Aurora',
    description: 'Um conjunto elegante para ocasiões especiais.',
  },
  {
    name: 'Conjunto Sol',
    description: 'Ideal para dias quentes e ensolarados.',
  },
  {
    name: 'Conjunto Noite',
    description: 'Perfeito para eventos noturnos sofisticados.',
  },
  {
    name: 'Conjunto Primavera',
    description: 'Inspirado nas flores da estação.',
  },
  {
    name: 'Conjunto Verão',
    description: 'Leve, confortável e estiloso.',
  },
  {
    name: 'Conjunto Retrô',
    description: 'Estilo vintage com toque moderno.',
  },
];
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#112233b2] via-[#0e1e2e9a] to-[#0d1d2eaf] font-sans p-8 gap-10">
        <header className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Left - Logo */}
        
          {/* Replace with your logo image */}
          <img src="/logoEtc/motfLogo.png" alt="Logo" className="h-10 absolute left-15 w-auto" />
        {/* Center - Navigation Links */}
        <nav className="hidden md:flex space-x-8 mx-auto">
          <Link href="/jacket" className="hover:underline">
            Jaquetas
          </Link>
          <Link href="/trousers" className="hover:underline">
            Calças
          </Link>
          <Link href="/products1W" className="hover:underline">
            Camisas
          </Link>
        </nav>
      </div>
    </header>
       <div className="bg-white text-black w-430">
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center bg-gray-100 text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">
            MOTF LUXE
          </h1>
          <p className="text-lg md:text-xl font-light">
            Discover the motf collection. Inspired by sailing, technology, and innovation.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16 px-4 md:px-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          The Motf Family
        </h2>
              {/* product div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* actual products image .map*/}
              <div className="w-full h-180 mb-4"
              style={{ backgroundImage: `url(${image[index - 1]})` }}
              ></div>
              <Link href='/products1W'>
              <h3 className="text-xl font-medium mb-2">{productData[index - 1].name}</h3>
              <p className="text-sm text-gray-600">
                {productData[index - 1].description}
              </p>
              </Link>
            </div>
          ))}
        </div>
        
      </section>

      {/* Footer or CTA Section */}
      <section className="py-16 bg-black text-white text-center px-4">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">
          Explore mais de motf
        </h2>
        <Link href="/products1W" className="mt-4 px-6 py-3 bg-white text-black uppercase tracking-wider hover:bg-gray-200 transition">
          Veja Todos Os Produtos
        </Link>
      </section>
      </div>
        <footer className="w-full bg-gray-900 text-gray-200 px-4 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">Suporte</h3>
              <ul>
                <li><a href="/policy/helpCenter" className="hover:underline">Centro de ajuda</a></li>
                <li><a href="/policy/helpCenter" className="hover:underline">Tenho perguntas</a></li>
                <li><a href="/policy/helpCenter" className="hover:underline">Entre em contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="break-words">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ecommercmkssouza@gmail.com&su=Olá&Gostaria=I%20de%20suporte%20nesse%20look%20porfavor" 
                className="hover:underline">
                  ecommercmkssouza@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Contato WhatsApp</h3>
              <p>
                <a href="https://wa.me/556181808187" className="hover:underline">
                  +55 (61) 981808187
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Política</h3>
              <ul>
                <li><a href="/policy" className="hover:underline">Política de privacidade</a></li>
                <li><a href="/policy" className="hover:underline">Termos de serviço</a></li>
                <li><a href="/policy" className="hover:underline">Como cuidamos das entregas</a></li>
              </ul>
            </div>
          </div>
           {/*integrate when we get the Copyright for MOTF

          <div className="mt-8 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Motf. All rights reserved.
          </div>
          */}
        </footer>         
      </div>
    );
  }