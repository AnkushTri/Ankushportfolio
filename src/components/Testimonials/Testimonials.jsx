import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

const Testimonials = () => {
  const testimaonials = [
    {
      name: "Manish",
      destination: "Founder of x@12",
      desc: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Ankush and will rehire in the future for Frontend development.”",
    },
    {
      name: "Aryan",
      destination: "CEO W#dev",
      desc: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”.”",
    },
    {
      name: "Srishti",
      destination: "Founder of Beautyhub",
      desc: "“Ankush was extremely easy and pleasant to work with and he truly cares about the project being a success. Ankush has a high level of knowledge and was able to work on my MERN stack application without any issues.”",
    },
  ];

  return (
    <div className="py-[10%] px-[5%] border bg-[#f1efef] relative  xsm:w-[100%]">
      <div className="w-[10%] mx-auto xsm:w-[30%]">
        <button className="bg-[#fcf9f9] rounded-lg px-4 py-1">
          Testimonilas
        </button>
      </div>
      <p className="text-center my-2 xsm:w-[90%] font-black text-[1.2rem]">
        Nice things people have said about me:
      </p>
      <div className="flex gap-[4%] mt-8 xsm:flex-col gap-10 w-[90%] mx-auto">
        {testimaonials?.map((el) => {
          return (
            <div
              key={el}
              className=" flex-1 py-5 px-10 bg-white shadow-md rounded-md"
            >
              <div className="text-[3rem] w-8 mx-auto my-2">
                <RiAccountCircleFill />
              </div>
              <p className="py-2 text-[#5a5a69]">{el.desc}</p>
              <div className="text-center ">
                <h2 className="font-semibold">{el.name}</h2>
                <p className=" text-[#5a5a69]">{el.destination}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
