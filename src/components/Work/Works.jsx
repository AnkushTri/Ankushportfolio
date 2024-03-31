import React from 'react'
import Work from './Work';

const Works = () => {

    const projectsData = [
      {
        title: "Karush NFT Market",
        description:
          "The world's unique and largest digital marketplace for collective and non funguable tokens (NFTs). Buy,Sell,and discover excluve digitls items,Discover, collect, and sell extraordinary NFTs Karush is the unique and largest NFT marketplace",
        image: "project-nft.png",
        skills: [
          { title: "Next.js" },
          { title: "Node.js" },
          { title: "React" },
          { title: "Express" },
          { title: "Git" },
          { title: "JavaScript" },
          { title: "MongoDB" },
          { title: "TypeScript" },
          { title: "Solidity" },
        ],
      },
      {
        title: "Triank Chat",
        description: "Triank Chat is online social media plateform ,where you can interact with world by using the gmail account, also option to share the files",
        image: "a.jpg",
        skills: [
          { title: "React" },
          { title: "Material UI" },
          { title: "Express" },
          { title: "Git" },
          { title: "JavaScript" },
          { title: "MongoDB" },
          { title: "TypeScript" },
        ],
      },
      {
        title: "Hopingminds.in",
        description:
          "Hopingminds.in is a training institute that provides courses with a pay-after-placement model. With a focus on practical skills and industry-relevant training, Hopingminds.in aims to empower students and professionals by offering high-quality education without upfront fees.",
        image: "hoping.png",
        skills: [
          { title: "React" },
          { title: "Material UI" },
          { title: "Express" },
          { title: "Git" },
          { title: "JavaScript" },
          { title: "MongoDB" },
          { title: "CSS" },
          { title: "JWT Token" },
        ],
      },
      {
        title: "Karush Drive 3.0",
        description:
          "Karush Drive 3.0 is an advanced cloud storage platform designed to provide seamless file storage and sharing capabilities. With robust security features and a user-friendly interface, Karush Drive 3.0 offers users a reliable solution for storing, managing, and accessing their files from anywhere.",
        image: "karush-drive3.0.png",
        skills: [
          { title: "React" },
          { title: "Etherium" },
          { title: "JavaScript" },
          { title: "Solidity" },
          { title: "MetaMask" },
          { title: "CSS" },
          { title: "Git" },
        ],
      },
    ];

  return (
    <div className="px-[5%]">
      <div className="w-[10%] mt-[5%] mx-auto">
        <button className="bg-[#fcf9f9] rounded-lg px-4 py-1">Work</button>
      </div>
      <p className="text-center my-2">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        {projectsData?.map((el) => {
          console.log(el);
          return (
            <div key={el}>
              <Work {...el} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works