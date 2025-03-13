import { assets, infoList } from "@/components/assets";
import { toolsData } from "@/components/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

interface AboutProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<AboutProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo font-semibold"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-16 mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1"
        >
          <p className="mb-8 max-w-2xl font-Ovo text-gray-700 leading-relaxed dark:text-white">
            I am a skilled full-stack developer with over a year of professional
            experience, specializing in building dynamic, scalable web and
            mobile applications. Throughout my career, I have had the privilege
            of collaborating with prestigious organizations, playing a key role
            in their digital transformation and success. My expertise spans the
            entire development lifecycle, from crafting seamless user interfaces
            to optimizing backend performance. Additionally, I have hands-on
            experience in deploying, managing, and maintaining applications in
            production environments, ensuring high availability, security, and
            performance. I am committed to delivering high-quality, efficient
            solutions that drive business growth.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-black/50"
              >
                <Image
                  src={isDarkMode ? assets.code_icon_dark : icon}
                  alt={title}
                  className="w-8 mt-2"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" width={32} height={32} />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-gray-700 font-Ovo"
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              More About Me
            </h3>
            <p className="leading-relaxed dark:text-white">
              I have a deep expertise in React.js, Next.js, Express, Nodejs,
              Python and various SQL databases. I am constantly improving my
              skills by learning new frameworks, optimizing performance in full
              stack applications, and contributing to open-source projects. I
              also enjoy writing tech blogs, mentoring budding developers, and
              working on challenging projects that enhance my problem-solving
              skills and creativity.
            </p>
            <p className="mt-4 leading-relaxed dark:text-white">
              When I'm not coding, you can find me exploring new places,
              indulging in photography, or diving into a good book on
              self-improvement and technology.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
