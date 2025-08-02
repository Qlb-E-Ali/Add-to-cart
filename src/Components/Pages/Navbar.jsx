import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import BillPage from './Bill';
import {useSelector} from "react-redux"

const Navbar = () => {
  const navItems = ['Home', 'About', 'Product', 'Services', 'Contact'];
  const [billSectoin, setBillSectoin] = useState(false)

  const cartItem = useSelector((state)=>state.Cart)

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between ">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">MyShop</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-indigo-600 cursor-pointer transition-colors">
            {item}
          </li>
        ))}
      </ul>

      {/* Cart Icon */}
      <div onClick={()=>setBillSectoin(!billSectoin)} className="relative cursor-pointer">
        <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors" />
        <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartItem.length}
        </span>
      </div>

     {billSectoin === true ? <BillPage/> : ""}

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        {/* You can add a hamburger menu here later */}
      </div>
    </nav>
  );
};

export default Navbar;
