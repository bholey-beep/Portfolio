import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 ,
      once:true,
    });
  }, []);

  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="grid">
      <div data-aos="fade-right" style={{ backgroundColor: '#9d96b1', borderRadius: '10px',padding:'8px ' }}>
        <h3>Modern Portfolio</h3>
    <p>A responsive and stylish portfolio using HTML, CSS, and JavaScript.</p>
        </div>
         
  <div data-aos="fade-left" style={{ backgroundColor: '#9d96b1', borderRadius: '10px', padding: '8px' }}>
   <a href="https://todolist-steel-one.vercel.app/" > <h3>To-do List</h3></a>
    <p>Organize your daily goals efficiently. Stay focused and complete your tasks with ease.</p>
  </div>
 
 <div data-aos="fade-right" style={{ backgroundColor: '#9d96b1', borderRadius: '10px', padding: '8px' }}>
  
    <h3>Clear the Clutter</h3>
  
  <p>A utility script that organizes files into folders based on their file extensions.</p>
<a href="/run-organizer.bat" download>Download</a>
</div>




        </div>
      
    </section>
  );
};

export default Projects;
