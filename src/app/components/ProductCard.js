'use client';

import { useCart } from '../contexts/CartContext';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center text-center border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="w-full h-80 relative bg-gray-100">
        {product.images?.[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4 w-full">
        <h3 className="text-xl font-medium mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: product.currency || 'USD',
            }).format(product.price / 100)}
          </span>
          <button
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price / 100, // Convert cents to dollars
              image: product.images?.[0],
              priceId: product.default_price // Required for Stripe checkout
            })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}