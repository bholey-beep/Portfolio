import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="bg-gradient-to-r from-[#00000075] to-[#f7f7f7] sticky top-0 z-50 transition"
      style={{
        paddingTop: 'clamp(0.5rem, 1.2vw, 1.5rem)',
        paddingBottom: 'clamp(0.5rem, 1.2vw, 1.5rem)',
      }}
    >
      <div
        className="mx-auto flex justify-between items-center"
        style={{
          maxWidth: 'clamp(320px, 90vw, 1280px)',
          paddingLeft: 'clamp(1rem, 2vw, 2rem)',
          paddingRight: 'clamp(1rem, 2vw, 2rem)',
        }}
      >
        <h1
          className="font-bold"
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
        
          }}
        >
          B.P SAH
        </h1>

        <ul 
          className="flex"
          style={{
            gap: 'clamp(1rem, 2vw, 2.5rem)',
            
          }}
        >
          <li className="hover:text-xl transition duration-500">
<a  href="#about">About</a></li>
          <li className="hover:text-xl transition duration-500">
<a href="#skills">Skills</a></li>
            <li className="hover:text-xl transition duration-500">
<a href="#projects">Projects</a></li>
            <li className="hover:text-xl transition duration-500">
<a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
