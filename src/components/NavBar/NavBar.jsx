import React ,{useEffect}from 'react'
import MyFile from "../../assets/Ank.pdf"

const NavBar = ({isDarkMode, toggleDarkMode }) => {

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
      <nav className="mx-auto flex justify-between px-[5%] py-2 box-border shadow-md shadow-slate-200">
        <div className="flex-1 self-center">
          <h1>Ankush Raj</h1>
        </div>
        <ul className="flex-1 flex justify-between list-none py-1 px-2">
          <li className="py-2 px-3">
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
          <li className="py-1 px-3 bg-black text-white rounded-xl self-center">
            {/* <a href={MyFile} download="MyFile" target="_blank"> */}
            <a href="a.jpg" download="img">
              <button>Download CV</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar