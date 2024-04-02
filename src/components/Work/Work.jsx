import React from "react";

const Work = (el) => {

const { title, description, image, skills } = el;
    
  return (
    <div className="py-[1%]  relative">
      <div className="flex gap-[8%] xsm:flex-col w-[90%] mx-auto">
        <div className="flex-1 my-6 py-2 bg-[#ebebf9] shadow-lg shadow-[#b7d0bfbe] rounded-2xl">
          <img
            src={image}
            alt="nft"
            className="w-[90%] mx-auto h-[95%] mt-[2%] rounded xsm:100% aspect-[3/3]"
          />
        </div>
        <div className="flex-1 my-6 px-8 py-2 shadow-sm shadow-[#575656] rounded flex flex-col xsm:mt-0">
          <h1 className="text-bolder text-black text-[1.5rem]">{title}</h1>
          <p className="pt-4 text-justify">{description}</p>
          <div className="flex gap-3 flex-wrap my-4">
            {skills?.map((el) => {
              return (
                <div className="bg-[#c1bebe] px-4 py-[2px] rounded-xl">
                  {el.title}
                </div>
              );
            })}
          </div>
          <div className="my-5 order-last">
            <a
              href="https://github.com/AnkushTri"
              target="_anku_git"
              className="border rounded-xl px-4 py-1 text-white bg-black"
            >
              explore the project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
