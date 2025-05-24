'use client';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CartPage() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  // Optional: Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle quantity changes safely
  const handleQuantityChange = (id, newQuantity) => {
    const quantity = Math.max(1, Math.min(99, newQuantity)); // Limit between 1-99
    updateQuantity(id, quantity);
  };

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link 
            href="/products" 
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="divide-y divide-gray-200 mb-8">
            {cart.map(item => (
              <div key={item.id} className="py-4 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-gray-600">${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded-l hover:bg-gray-100"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      className="w-16 px-2 py-1 border-t border-b text-center"
                    />
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded-r hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">Subtotal:</span>
              <span className="font-bold text-xl">${cartTotal}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={clearCart}
                className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition-colors"
              >
                Clear Entire Cart
              </button>
              
              <Link
                href="/checkout"
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg text-center hover:bg-green-700 transition-colors font-medium"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}