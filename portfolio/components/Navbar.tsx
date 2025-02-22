import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";

const Navbar: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Background Color Overlay */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        role="navigation"
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          {["Home", "About me", "Service", "My Work", "Contact me"].map(
            (item, index) => (
              <li key={index}>
                <a
                  className="font-Ovo"
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right-Side Icons & Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button>
            <Image src={assets.moon_icon} alt="Theme Toggle" className="w-6" />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} className="w-3" alt="Arrow Icon" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className={`fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col gap-4 py-20 px-10`}
        >
          {/* Close Button */}
          <button
            className="absolute right-6 top-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image src={assets.close_black} alt="Close" className="w-5" />
          </button>

          {/* Menu Links */}
          {["Home", "About me", "Service", "My Work", "Contact me"].map(
            (item, index) => (
              <li key={index}>
                <a
                  className="font-Ovo"
                  onClick={() => setIsMenuOpen(false)}
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
