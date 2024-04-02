import React ,{useEffect, useState}from 'react'
import MyFile from "../../assets/Ank.pdf"
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const NavBar = ({isDarkMode, toggleDarkMode }) => {

  const [open,setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(!open);
  }

  const handleToggle=()=>{
    toggleDarkMode()
  }
  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll("nav a");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    };
    smoothScroll();

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      const links = document.querySelectorAll("nav a");
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
""
  return (
    <div className={isDarkMode ? "text-[gold]" : " text-gray-600"}>
      <nav className="flex justify-between px-[5%] py-2 box-border shadow-md shadow-slate-200 xsm:flex-col xsm:px-1 text-[1.2rem] w-[100%]">
        <div className="flex-1 self-center xsm:self-start">
          <h1>Ankush Raj</h1>
        </div>
        {open && (
          <ul className=" hidden flex-1 flex justify-between list-none py-1 px-2 xsm:block flex-col w-[100%] text-center">
            <li className="py-2 px-3 hover:bg-[#cfe5e1]">
              <a href="#about">About</a>
              {/* <Link to="/about">About</Link> */}
            </li>
            <li className="py-2 px-3 hover:bg-[#cfe5e1]">
              <a href="#work">Work</a>
            </li>
            <li className="py-2 px-3 hover:bg-[#cfe5e1]">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="py-2 px-3 hover:bg-[#cfe5e1]">
              <a href="#contact">Contact</a>
            </li>
            <li className="py-2 px-3 cursor-pointer ">
              <button onClick={handleToggle}>
                <img src="Icon.svg" alt="dark" />
              </button>
            </li>
            <li className="py-1 px-3 bg-black text-white rounded-xl self-center w-[90%] mx-auto">
              {/* <a href={MyFile} download="MyFile" target="_blank"> */}
              <a href="pdf/Ankush'sres.pdf" download="img">
                <button>Download CV</button>
              </a>
            </li>
          </ul>
        )}

        <ul className="flex-1 flex justify-between list-none py-1 px-2 xsm:hidden">
          <li className="py-2 px-3 ">
            <a href="#about">About</a>
            {/* <Link to="/about">About</Link> */}
          </li>
          <li className="py-2 px-3">
            <a href="#work">Work</a>
          </li>
          <li className="py-2 px-3 ">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="py-2 px-3">
            <a href="#contact">Contact</a>
          </li>
          <li className="py-2 px-3 cursor-pointer">
            <button onClick={handleToggle}>
              <img src="Icon.svg" alt="dark" />
            </button>
          </li>
          <li className="py-1 px-2 bg-black text-white rounded-xl self-center ">
            {/* <a href={MyFile} download="MyFile" target="_blank"> */}
            <a href="pdf/Ankush'sres.pdf" download="img">
              <button className="text-[0.7rem] pb-2">Download CV</button>
            </a>
          </li>
        </ul>

        <div
          className="hidden xsm:block absolute right-5 text-[1.2rem] transition ease-in-out delay-200"
          onClick={handleClick}
        >
          {open ? <IoMdClose /> : <IoMenu />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar