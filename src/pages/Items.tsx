import React, { useState } from "react";
import { useCart } from "../context/CartContext";

import Button from "../components/reuseable/Button";

const items = [
  {
    name: "Classic Sneakers",
    price: "$79.99",
    image: "https://via.placeholder.com/300x180?text=Sneakers",
    description: "Timeless style and comfort for everyday wear.",
    colors: ["#0D9488", "#64748B", "#F59E42"],
  },
  {
    name: "Running Shoes",
    price: "$99.99",
    image: "https://via.placeholder.com/300x180?text=Running",
    description: "Lightweight and supportive for your daily run.",
    colors: ["#EF4444", "#3B82F6", "#FBBF24"],
  },
  {
    name: "High Tops",
    price: "$89.99",
    image: "https://via.placeholder.com/300x180?text=High+Tops",
    description: "Make a statement with these bold high tops.",
    colors: ["#A21CAF", "#F59E42", "#0EA5E9"],
  },
  {
    name: "Sandals",
    price: "$49.99",
    image: "https://via.placeholder.com/300x180?text=Sandals",
    description: "Stay cool and comfortable all summer long.",
    colors: ["#F59E42", "#22C55E", "#64748B"],
  },
];


const Items: React.FC = () => {
  const { addToCart } = useCart();
  const [popup, setPopup] = useState<string | null>(null);
  // Track selected color for each item
  const [selectedColors, setSelectedColors] = useState<number[]>(items.map(() => 0));

  const handleColorSelect = (itemIdx: number, colorIdx: number) => {
    setSelectedColors((prev) => {
      const updated = [...prev];
      updated[itemIdx] = colorIdx;
      return updated;
    });
  };

  const handleAddToCart = (itemIdx: number) => {
    const item = items[itemIdx];
    const colorIdx = selectedColors[itemIdx];
    addToCart({
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.colors[colorIdx],
    });
    setPopup(`${item.name} (${colorName(item.colors[colorIdx])}) added to cart!`);
    setTimeout(() => setPopup(null), 1800);
  };

  // Helper to show color as a name or hex
  function colorName(hex: string) {
    switch (hex) {
      case "#0D9488": return "Teal";
      case "#64748B": return "Slate";
      case "#F59E42": return "Orange";
      case "#EF4444": return "Red";
      case "#3B82F6": return "Blue";
      case "#FBBF24": return "Yellow";
      case "#A21CAF": return "Purple";
      case "#0EA5E9": return "Sky";
      case "#22C55E": return "Green";
      default: return hex;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Shoe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex gap-2 mb-2 justify-center">
                {item.colors.map((color, cidx) => (
                  <button
                    key={cidx}
                    type="button"
                    className={`inline-block w-6 h-6 rounded-full border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-600 ${selectedColors[idx] === cidx ? 'border-teal-600 ring-2 ring-teal-400' : 'border-gray-200'}`}
                    style={{ backgroundColor: color }}
                    title={`Color ${cidx + 1}`}
                    aria-label={`Select color ${cidx + 1}`}
                    onClick={() => handleColorSelect(idx, cidx)}
                  />
                ))}
              </div>
              <span className="text-lg font-bold text-blue-600 mb-4">{item.price}</span>
              <Button size="md" variant="primary" className="w-full mt-auto" onClick={() => handleAddToCart(idx)}>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
      {popup && (
        <div className="fixed left-1/2 top-8 transform -translate-x-1/2 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-lg font-medium animate-bounce">
          {popup}
        </div>
      )}
    </div>
  );
};

export default Items;
