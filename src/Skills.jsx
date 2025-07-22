import React, { useEffect } from 'react';
import AOS from 'aos';
const Skills = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
  return (
     <section id="skills" className="container">
      <h2>Skills</h2>
      <div className="grid">
        <div className="card" data-aos="fade-down" >HTML5</div>
        <div className="card" data-aos="fade-down">CSS3</div>
        <div className="card" data-aos="fade-down">JavaScript</div>
        <div className="card" data-aos="fade-down">React</div>
        <div className="card" data-aos="fade-down">Figma</div>
      </div>
    </section>
  
  )
}

export default Skills
