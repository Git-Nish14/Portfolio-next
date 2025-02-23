import { assets, infoList } from "@/assets/assets";
import { toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

interface AboutProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<AboutProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Ovo font-semibold">About me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
        <div className="relative w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-Ovo text-gray-700 leading-relaxed dark:text-white">
            I am a skilled full-stack web developer with over a year of
            professional experience, specializing in building dynamic and
            scalable web applications. Throughout my career, I have had the
            privilege of collaborating with prestigious organizations, playing a
            key role in their digital transformation and success. My expertise
            spans the entire development lifecycle, from crafting seamless user
            interfaces to optimizing backend performance, ensuring high-quality
            and efficient solutions.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
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
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" width={32} height={32} />
              </li>
            ))}
          </ul>

          <div className="mt-8 text-gray-700 font-Ovo">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              More About Me
            </h3>
            <p className="leading-relaxed dark:text-white">
              I have a deep expertise in Python, React.js, Next.js, Express, and
              various SQL databases. I am constantly improving my skills by
              learning new frameworks, optimizing performance in web
              applications, and contributing to open-source projects. I also
              enjoy writing tech blogs, mentoring budding developers, and
              working on challenging projects that enhance my problem-solving
              skills and creativity.
            </p>
            <p className="mt-4 leading-relaxed dark:text-white">
              When I'm not coding, you can find me exploring new places,
              indulging in photography, or diving into a good book on
              self-improvement and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
