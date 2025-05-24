'use client';
import Link from 'next/link';
import { useCart } from '/contexts/CartContext';

export default function CartIcon() {
  const { cartCount } = useCart();
  
  return (
    <Link href="/cart" className="relative">
      <svg className="w-6 h-6">🛒</svg>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}