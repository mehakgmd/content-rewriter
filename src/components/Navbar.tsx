"use client"
import { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-grey shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gradient-to-r from-dark to-light">ChatGPT-Rewriter</h1>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-dark rounded-md px-3 py-1 hover:bg-light cursor-pointer hover:border-b-2" style={{fontSize: "14px"}}>
              Home
            </Link>
            <Link href="/" className="text-dark rounded-md px-3 py-1 hover:bg-light cursor-pointer hover:border-b-2" style={{fontSize: "14px"}}>
              About Us
            </Link>
            <Link href="/privacy-policy" className="text-dark rounded-md px-3 py-1 hover:bg-light cursor-pointer hover:border-b-2" style={{fontSize: "14px"}}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-dark rounded-md px-3 py-1 hover:bg-light cursor-pointer hover:border-b-2" style={{fontSize: "14px"}}>
            Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="text-dark rounded-md px-3 py-1 hover:bg-light cursor-pointer hover:border-b-2" style={{fontSize: "14px"}}>
              Disclaimer
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-light hover:text-white focus:outline-none focus:bg-white focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            > */}
              <span className="sr-only">Open main menu</span>
              <GiHamburgerMenu style={{color: "white"}} />
            {/* </button> */}
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md" style={{fontSize: "14px"}}>
            Home
          </Link>
          <Link href="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md" style={{fontSize: "14px"}}>
          About Us
          </Link>
          <Link href="/privacy-policy" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md" style={{fontSize: "14px"}}>
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md" style={{fontSize: "14px"}}>
          Terms & Conditions
          </Link>
          <Link href="/disclaimer" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md" style={{fontSize: "14px"}}>
            Disclaimer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
