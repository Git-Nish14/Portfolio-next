import { assets } from "@/components/assets";
import Image from "next/image";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

export const dynamic = "force-dynamic";

interface FooterProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="mt-20 relative">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            className="w-6"
          />
          nishpatel.cse@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 relative">
        <p>
          &copy; {new Date().getFullYear()} Nish Patel. All rights reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Git-Nish14">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/nishpatel14/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/nish_p14/">
              Instagram
            </a>
          </li>
        </ul>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" bottom-6 right-6 sm:right-10 md:right-14 lg:right-20 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-all dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
