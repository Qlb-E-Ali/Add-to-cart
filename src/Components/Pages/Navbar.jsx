import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import BillPage from './Bill';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Product', 'Services', 'Contact'];
  const [billSectoin, setBillSectoin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItem = useSelector((state) => state.Cart);

  return (
    <>
      <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-40">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">MyShop</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-indigo-600 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div
            onClick={() => setBillSectoin(!billSectoin)}
            className="relative cursor-pointer"
          >
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItem.length}
            </span>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-indigo-600 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Bill Section (conditionally shown) */}
      {billSectoin && (
        <div className="px-4 md:px-12 mt-4">
          <BillPage />
        </div>
      )}
    </>
  );
};

export default Navbar;
