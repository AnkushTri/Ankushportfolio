
import React from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiSololearn } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="px-[5%] py-[5%] xsm:w-[90%] mx-auto">
      <div className="w-[15%] mx-auto xsm:w-[42%]">
        <button className="bg-[#fcf9f9] rounded-lg px-4 py-1">
          Get in touch
        </button>
      </div>
      <p className="text-center my-2 xsm:font-black text-[1.2rem]">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="w-[25%]  mx-auto text-[1.5rem] xsm:w-[90%] text-[1rem]">
        <div className="flex gap-6 mt-8 items-center ">
          <div>
            <AiTwotoneMail />
          </div>
          <h1>kumarankush13701@gmail.com</h1>
        </div>
        <div className="flex gap-6 my-2 items-center ">
          <div>
            <FiPhone />
          </div>
          <h1>7050260451</h1>
        </div>
      </div>
      <div className="text-center my-5">
        <p>You may also find me on these platforms!</p>
        <div
          className="flex gap-8 py-4 text-[1.5rem] justify-center"
          target="_blank"
        >
          <a href="https://github.com/AnkushTri">
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/ankushkumar5"
            target="_anku_linkedin"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ankush13703/"
            target="_anku_insta"
          >
            {" "}
            <FiInstagram />
          </a>
          <a href="https://www.sololearn.com/en/profile/22062111">
            {" "}
            <SiSololearn />
          </a>
          <a href="https://twitter.com/AnkushK35349348">
            {" "}
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact