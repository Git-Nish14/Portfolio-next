import { assets, infoList } from "@/assets/assets";
import { toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">
      {/* Introduction Heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Ovo font-semibold">About me</h2>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
        {/* Profile Image */}
        <div className="relative w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </div>

        {/* About Me Content */}
        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-Ovo text-gray-700 leading-relaxed">
            I am a skilled full-stack web developer with over a year of
            professional experience, specializing in building dynamic and
            scalable web applications. Throughout my career, I have had the
            privilege of collaborating with prestigious organizations, playing a
            key role in their digital transformation and success. My expertise
            spans the entire development lifecycle, from crafting seamless user
            interfaces to optimizing backend performance, ensuring high-quality
            and efficient solutions.
          </p>

          {/* Information Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-8 mt-2" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
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
        </div>
      </div>
    </div>
  );
}

export default About;
