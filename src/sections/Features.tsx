import React from "react";
import Card from "../components/reuseable/Card";

const features = [
  {
    title: "Fast Delivery",
    description: "Get your shoes delivered within 24 hours anywhere in the city.",
    image: "🚚",
  },
  {
    title: "Premium Quality",
    description: "We use only the best materials for comfort and durability.",
    image: "⭐",
  },
  {
    title: "Wide Selection",
    description: "Choose from hundreds of styles and colors to fit your taste.",
    image: "👟",
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days of purchase.",
    image: "🔄",
  },
];


const Features: React.FC = () => {
  return (
    <section className="features-section py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Why Choose Us?</h2>
      <div className="features-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={<span style={{ fontSize: 48, lineHeight: 1 }}>{feature.image}</span>}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
