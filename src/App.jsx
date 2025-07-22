import React, { useState } from "react";



import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

 function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(prev => !prev);
  }
  

  

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar/>
      <Header toggleMode={toggleMode} isDarkMode={darkMode} />
    <div className="spacer">

    </div>
      <About/>
      <div className="space">
      
    </div>
      <Skills/>
      <div className="space">
      
    </div>
      <Projects/>
      <div className="space">
      
    </div>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App
//animate on scroll lib



