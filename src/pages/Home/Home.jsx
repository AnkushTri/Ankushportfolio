import React ,{useState}from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
// import Work from '../../components/Work/Work'
import Works from '../../components/Work/Works'
import Experience from '../../components/Experience/Experience'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'


const Home = () => {

const [isDarkMode, setIsDarkMode] = useState(false);
const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="w-[100%] mx-auto">
      <div>
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="work" className=" my-[5%]">
        <Works />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
}

export default Home