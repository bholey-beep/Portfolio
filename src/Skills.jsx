import React, { useEffect } from 'react';
import AOS from 'aos';
const Skills = () => {
  useEffect(() => {
      AOS.init({ duration: 500 });
    }, []);
  
  return (
     <section id="skills" className="max-w-5xl mx-auto px-4 py-8">
  <h2 className="text-3xl font-bold border-l-4 border-b-0 pl-4 mb-4">Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
   <div className="bg-[#9d96b1] w- max-w-[300px]  px-25 py-5  rounded-2xl " data-aos="fade-down"> HTML5</div>
     <div className="bg-[#9d96b1] w-full max-w-[300px]  px-25 py-5  rounded-2xl " data-aos="fade-down">CSS3</div>
        <div className="bg-[#9d96b1] w-full max-w-[300px]  px-25 py-5  rounded-2xl " data-aos="fade-down">JavaScript</div>
        <div className="bg-[#9d96b1] w-full max-w-[300px] px-25 py-5  rounded-2xl " data-aos="fade-down">React</div>
        <div className="bg-[#9d96b1] w-full max-w-[300px]  px-25 py-5  rounded-2xl " data-aos="fade-down">Figma</div>
      </div>
    </section>
  
  )
}

export default Skills
