import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

interface HeroProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Nish Patel profile"
          className="rounded-full w-32 mb-4"
        />{" "}
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl font-Ovo"
      >
        Hi! I'm Nish Patel
        <Image src={assets.hand_icon} alt="Waving hand emoji" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-white"
      >
        I am a Full Stack Web Developer from Virginia, USA, with one year of
        experience at multiple companies like InsureHQ and Codage Habitation.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-200 hover:text-black transition duration-300 dark:bg-transparent "
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow icon"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Nish Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-200 transition duration-300 bg-white dark:text-black"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
