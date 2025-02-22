import Image from "next/image";
import { assets } from "@/assets/assets";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center px-6">
      <Image
        src={assets.profile_img}
        alt="Nish Patel profile"
        className="rounded-full w-32 mb-4"
      />

      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Nish Patel
        <Image src={assets.hand_icon} alt="Waving hand emoji" className="w-6" />
      </h3>

      <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Web Developer
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo text-gray-700">
        I am a Full Stack Web Developer from Virginia, USA, with one year of
        experience at multiple companies like InsureHQ and Codage Habitation.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-200 hover:text-black transition duration-300"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow icon"
            className="w-4"
          />
        </a>
        <a
          href="/Nish Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-200 transition duration-300"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
