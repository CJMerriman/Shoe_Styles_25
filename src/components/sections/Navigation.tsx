import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../reuseable/Heading";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Items", to: "/Items" },
  { label: "Contact", to: "/Contacts" },
  { label: "Cart", to: "/Cart" },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/logo.jpeg"
              alt="ShoeStyle Logo"
              className="logo w-10 h-10 object-contain rounded-full border border-gray-200 shadow-sm"
              style={{ background: '#fff' }}
            />
            <Heading level={4} className="text-teal-600 tracking-tight">ShoeStyle</Heading>
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-inter font-medium text-[16px] text-[#64748B] hover:underline hover:text-[#0D9488] transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-[#64748B] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#64748B] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#64748B]"></span>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col gap-2 px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-inter font-medium text-[16px] text-[#64748B] hover:underline hover:text-[#0D9488] px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
