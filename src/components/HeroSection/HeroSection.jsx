import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiSololearn } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="flex px-[5%] justify-between py-[5%] gap-5 ">
      <div className="w-[65%]">
        <h1 className="text-[2.5rem] font-bold py-3">
          Hi, I’m Ankush Kumar 👋
        </h1>
        <p className="text-grey-600 text-[1rem] tracking-wider">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="mt-10 flex items-center gap-3 text-grey-400">
          <div>
            <SlLocationPin />
          </div>
          <div>Mohali, India</div>
        </div>
        <div className="flex items-center gap-3 text-grey-400 py-3">
          <div className=" text-[green] ">
            <GoDotFill />
          </div>
          <div>Available for new projects</div>
        </div>
        <div className="flex gap-8 py-8 text-[1.5rem]">
          <a href="https://github.com/AnkushTri">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/ankushkumar5" target="_anku_linkedin">
            <BsLinkedin />
          </a>
          <a
            href="https://https://www.instagram.com/ankush13703/"
            target="_anku_insta"
          >
            {" "}
            <FiInstagram />
          </a>
          <a href="">
            {" "}
            <SiSololearn />
          </a>
          <a href="">
            {" "}
            <FiTwitter />
          </a>
        </div>
      </div>
      <div className="w-[35%] h-[50vh] ">
        <img
          src="/anku.jpg"
          alt="anku"
          className="w-[45%] aspect-[3/3.8] rounded relative z-50 border mx-auto my-0"
        />
        <div className=" w-[45%] bg-slate-400 h-inherit border aspect-[3/3.8]  translate-x-[75%] translate-y-[-90%]"></div>
      </div>
    </div>
  );
}

export default HeroSection