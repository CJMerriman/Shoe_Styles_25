import React from "react";

import Heading from "../components/reuseable/Heading";
import Paragraph from "../components/reuseable/Paragraph";
import Button from "../components/reuseable/Button";
import heroBg from "../assets/download.jpg";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] w-full text-center px-4 py-16 md:py-32"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Hero Section"
    >
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <Heading level={1} className="text-white drop-shadow-lg">
          Step Into Style
        </Heading>
        <Paragraph variant="body" className="text-white/90">
          Discover the latest trends in footwear. Shop our exclusive collection and find your perfect pair today!
        </Paragraph>
        <div className="flex gap-4 mt-4">
          <Button as="a" href="/shop" variant="primary" size="lg" className="shadow-lg">
            Shop Now
          </Button>
          <Button as="a" href="/items" variant="link" size="lg">
            View Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
