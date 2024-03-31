import React from 'react'

const Experience = () => {
    
  return (
    <div className="py-[5%] border bg-[#f1efef] relative">
      <div className="w-[10%] mx-auto">
        <button className="bg-[#fcf9f9] rounded-lg px-4 py-1">
          Experience
        </button>
      </div>
      <p className="text-center my-2">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex w-[70%] mx-auto bg-white px-8 py-6 my-10 justify-between rounded-lg shadow-lg ">
        <div className="flex-1">
          <h1 className="text-[2rem] text-[#5ff75f] text-bolder">
            Hoping Minds
          </h1>
        </div>
        <div className="flex-1">
          <h3 className="text-[1.5rem] text-black text-bolder">
            Frontend Developer
          </h3>
          <ul className="list-disc text-justify text-[1rem]">
            <li className="py-1">
              Full Stack Developer with expertise in logic building,
              Object-Oriented Programming, and DSA
            </li>
            <li className="py-1">
              contributed to end-to-end project development, ensuring efficient
              and scalable solutions
            </li>
            <li className="py-1">
              Skilled in crafting responsive user interfaces using HTML, CSS,
              React.js and TailwindCss
            </li>
          </ul>
        </div>
        <div className="flex-[0.5] pl-6 my-2 text-[0.8rem]">
          <p className="ml-8">July 2024 - Present</p>
        </div>
      </div>
      <div className="flex w-[70%] mx-auto bg-white px-8 py-6 my-5 justify-between rounded-lg shadow-lg ">
        <div className="flex-1">
          <h1 className="text-[2rem] text-[#5ff75f] text-bolder">
            O7 Services
          </h1>
        </div>
        <div className="flex-1">
          <h3 className="text-[1.5rem] text-[#1c1d1c] text-bolder">
            Web Developer Intern
          </h3>
          <ul className="list-disc text-justify text-[1rem]">
            <li className="py-1">
              During my internship, I honed my skills in web development
              architecture, particularly focusing on PHP web development
            </li>
            <li className="py-1">
              Gained expertise in PHP and MySQL integration, handling projects
              end-to-end
            </li>
            <li className="py-1">
              I then utilized these skills to develop a comprehensive Royal
              Hotel management web application
            </li>
          </ul>
        </div>
        <div className="flex-[0.5] my-2 pl-6 text-[0.8rem]">
          <p className="ml-8">July 2022 - Aug 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Experience