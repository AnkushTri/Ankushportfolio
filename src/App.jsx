
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'

import "./App.css"

import React,{useState} from 'react'
import NavBar from './components/NavBar/NavBar'

const App = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 const toggleDarkMode = () => {
   setIsDarkMode(!isDarkMode);
   console.log(isDarkMode)
 };

  return (
    <div className={isDarkMode && 'dark-theme'}>
      <BrowserRouter>
      <NavBar  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/about" element={<About />}/> */}
        {/* <Route path="/login" element={<Login />}/> */}
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App