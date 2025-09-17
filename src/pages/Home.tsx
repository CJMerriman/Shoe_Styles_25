// src/pages/Home.tsx
import React from "react";
// Ensure the Button component exists at the correct path.
// If the file is named Button.tsx or Button.js in src/components, this import is correct.
// If not, update the path below to match the actual location and filename.
// Update the import path below to match the actual location of your Button component.
// For example, if Button.tsx is in src/components/ui, use:
// import Button from "../components/ui/Button";
// Update the path below to match the actual location of your Button component.
// Example: If Button.tsx is in src/components, use:
import Button from "../components/reusableButton/Button";
// If Button.tsx is in src/components/ui, ensure the file exists at that path.

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
      <p className="text-gray-600">Testing different button variants</p>

      <div className="flex space-x-4">
        <Button variant="primary" size="md" onClick={() => alert("Primary clicked!")}>
          Primary
        </Button>

        <Button variant="secondary" size="md">
          Secondary
        </Button>

        <Button variant="outline" size="md">
          Outline
        </Button>
      </div>
    </div>
  );
};

export default Home;
