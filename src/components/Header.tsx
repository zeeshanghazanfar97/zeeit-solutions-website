import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="ZeeIT Solutions Logo"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
          <span className="text-2xl font-bold text-primary dark:text-primary-foreground select-none">
            ZeeIT Solutions
          </span>
        </Link>

        <nav>
          <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile menu button placeholder if needed later */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
