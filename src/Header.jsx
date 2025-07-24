import React from 'react';
import bhol from './assets/bhol.jpg';
import hero from './assets/h.mp4';


function Header({ toggleMode, isDarkMode }) {
  return (
   <header className=" ">
  <video src={hero} autoPlay muted loop className="absolute w-full h-[clamp(400px,80vh,200px)]  object-cover" />
  <div className="relative pt-24 pb-2 px-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
   <div className="relative my-8">
  <img 
    src={bhol} 
    alt="circle" 
    className="absolute top-[clamp(px,3vw,)] left-[clamp(5px,4vw,60px)]
 w-[150px] h-[150px] rounded-full border-2 border-black" 
  />
</div>
 <div className=" ">
      <div className="flex flex-col items-start px-4 sm:px-8 py-6 ">
  <h2 className="max-w-[400px] w-full font-bold bg-white dark:bg-transparent rounded-xl px-3 text-[clamp(1.5rem,4vw,2.5rem)] leading-snug bg-gradient-to-r from-[#00000075] to-[#f7f7f7] sticky top-0 z-50 transition">
    Hello, I'm B.P Sah
  </h2>
  
  <h3 className="max-w-[400px] w-full font-medium bg-white dark:bg-transparent rounded-xl px-3 py-2 mt-4 text-[clamp(1rem,3vw,1.5rem)] leading-snug bg-gradient-to-r from-[#00000075] to-[#f7f7f7] sticky top-0 z-50 transition">
    Frontend Developer | UI/UX Designer
  </h3>
</div>

      {/* {/* <button
        onClick={toggleMode}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button> */}
    </div> 
  </div>
</header>
);
}

export default Header;