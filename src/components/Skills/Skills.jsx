import React from 'react'

const Skills = () => {

    const imageDirectory = "Home/Desktop/";

    const imageData = [
      { 
        title: "Next.js",
       img: `${imageDirectory}icon-nextjs.svg`
     },
      { title: "Node.js", img: `${imageDirectory}icon-nodejs.svg` },
      { title: "React", img: `${imageDirectory}icon-react.svg` },
      { title: "Tailwind CSS", img: `${imageDirectory}icon-tailwindcss.svg` },
      { title: "Express", img: `${imageDirectory}icon-express.svg` },
      { title: "Git", img: `${imageDirectory}icon-git.svg` },
      { title: "JavaScript", img: `${imageDirectory}icon-javscript.svg` },
      { title: "MongoDB", img: `${imageDirectory}icon-mongodb.svg` },
      { title: "TypeScript", img: `${imageDirectory}icon-typescript.svg` },
      { title: "SQL", img: `${imageDirectory}icon-postgresql.svg` },
    ];

{/* <div className="flex">
    imageData?.map((data)=>{
        return <div key={data} className='w-[30%]'> 
            <h1>{data.title}</h1>
            <img src={data.img} alt="" className='w-[30px] mx-auto'/>
        </div>
    })
</div>  */}

  return (
    <div className="py-[5%]  mb-8 xsm:w-[90%] mx-auto">
      <div className="w-[10%] mx-auto xsm:w-[20%]">
        <button className="bg-[#fcf9f9]rounded-lg px-4 py-1">Skills</button>
      </div>

      <p className="text-center my-4 xsm:font-black text-[1.2rem] ">
        The skills, tools and technologies I am really good at:
      </p>

      <div className="grid grid-cols-5 gap-y-[20%]  xsm:grid-cols-3 gap-y-2">
        {imageData?.map((el) => {
          return (
            <div className="py-3 self-center w-[100%]" key={el}>
              <img
                src={el.img}
                alt="el.title"
                className="w-[50%]h-8 mx-auto "
              />
              <p className="py-2 text-center">{el.title} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills