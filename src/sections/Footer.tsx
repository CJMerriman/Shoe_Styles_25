import React from "react";
import Paragraph from "../components/reuseable/Paragraph";

import Button from "../components/reuseable/Button";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-10 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">ShoeStyle</h3>
          <Paragraph className="text-white">
            123 Shoe Ave, Fashion City, 12345<br />
            Email: <a href="mailto:info@shoestyle.com" className="underline text-white">info@shoestyle.com</a><br />
            Phone: <a href="tel:+1234567890" className="underline text-white">(123) 456-7890</a>
          </Paragraph>
        </div>
        <nav className="flex flex-col items-center md:items-end gap-2">
          <Paragraph className="font-semibold mb-1 text-white">Quick Links</Paragraph>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className="text-white hover:underline bg-transparent p-0 min-w-0 min-h-0 focus:outline-none focus:ring-2 focus:ring-blue-400 px-4 py-2 rounded"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Button as="a" href={link.href} className="text-white hover:underline bg-transparent p-0 min-w-0 min-h-0 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {link.label}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-center text-xs text-white mt-8">
        &copy; {new Date().getFullYear()} ShoeStyle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
