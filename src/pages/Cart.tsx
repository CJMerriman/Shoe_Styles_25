

import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/reuseable/Button";

const Cart: React.FC = () => {
  const { cart, increment, decrement, remove } = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Your Cart</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 py-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-sm text-gray-500">Color: <span style={{ backgroundColor: item.color }} className="inline-block w-4 h-4 rounded-full align-middle border ml-1" title={item.color}></span></div>
                  </div>
                  <div className="text-base font-bold text-blue-600">{item.price}</div>
                  <div className="flex items-center gap-2 ml-2">
                    <Button size="sm" variant="primary" onClick={() => decrement(idx)} aria-label="Decrease quantity">-</Button>
                    <span className="text-sm text-gray-700">{item.quantity}</span>
                    <Button size="sm" variant="primary" onClick={() => increment(idx)} aria-label="Increase quantity">+</Button>
                  </div>
                  <Button size="sm" variant="link" className="ml-2 text-red-600 hover:text-red-800" onClick={() => remove(idx)} aria-label="Remove item">Delete</Button>
                </li>
              ))}
            </ul>
            <div className="text-right text-lg font-bold text-gray-900">Total: ${total.toFixed(2)}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
