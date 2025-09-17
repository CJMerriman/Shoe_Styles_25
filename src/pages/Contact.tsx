// src/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-300 text-gray-900 hover:bg-gray-400",
};

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  ...props
}) => (
  <button
    className={`rounded ${variantClasses[variant]} ${sizeClasses[size]} font-semibold transition`}
    {...props}
  >
    {children}
  </button>
);

export default Button;

// src/pages/Contact.tsx
import React from "react";
import Button from "../components/reusableButton/Button";

const Contact: React.FC = () => {
  const handleSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Contact Page</h1>
      <p className="text-gray-600">Test submit and cancel actions</p>

      <div className="flex space-x-4">
        <Button variant="primary" size="lg" onClick={handleSubmit} type="submit">
          Submit
        </Button>

        <Button variant="secondary" size="lg" onClick={() => alert("Cancelled!")}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Contact;
