'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

export default function MobileComponent() {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await fetch('/api/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchProducts();
    }, []);
  
    if (loading) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Loading products...</h1>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#112233b2] via-[#0e1e2e9a] to-[#0d1d2eaf] font-sans p-8 gap-10">
      <header className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Left - Logo */}
        
          {/* Replace with your logo image */}
          <img src="/logoEtc/motfLogo.png" alt="Logo" className="h-10 absolute left-15 w-auto" />
        {/* Center - Navigation Links */}
        <nav className="hidden md:flex space-x-8 mx-auto">
          <Link href="/update" className="hover:underline">
            Jaquetas
          </Link>
          <Link href="/update" className="hover:underline">
            Calças
          </Link>
          <Link href="/update" className="hover:underline">
            Camisas
          </Link>
        </nav>
      </div>
    </header>
       <div className="bg-white text-black w-430">
       
      {/* Collection Grid */}
      <section className="py-16 px-4 md:px-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          The Motf Family
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-80 bg-gray-200 mb-4"></div>

          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
         </div>
        </div>
      </div>
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