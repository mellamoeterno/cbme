import Image from "next/image";
import Link from "next/link";

export default function DesktopComponent() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center text-center"
            >
              {/* Replace src with actual image URL later */}
              <div className="w-full h-80 bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-medium mb-2">nome do produto</h3>
              <p className="text-sm text-gray-600">
                Brief description about the product.
              </p>
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
      </div>
    );
  }