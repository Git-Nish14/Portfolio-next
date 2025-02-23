import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

interface ContactProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d57e162-925b-41cf-86a2-1d66b143f60e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[lenght:90%_auto] dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl font-Ovo font-semibold">
        Get in Touch
      </h2>
      <p className="text-center max-w-full mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello, feel free to reach out using the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-black/30 dark:border-white/90"
            name="name"
          ></input>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-black/30 dark:border-white/90"
            name="email"
          ></input>
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-black/30 dark:border-white/90"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-gray-400 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-gray-500 dark:hover:text-black"
        >
          Submit to connect{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
