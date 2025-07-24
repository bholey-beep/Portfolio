import React, { useEffect } from 'react';
import AOS from 'aos';
const Contact = () => {
   useEffect(() => {
      AOS.init({ duration: 2000,
        once:true
       });
    }, []);
  
  return (
   
   <div
  data-aos="fade-up"
  className="bg-[#9d96b1] rounded-lg w-[clamp(50px,95vw,1000px)] px-3 py-4 mx-auto"
>
  <section className="px-4">
    <h2 className="text-3xl font-bold border-l-4 border-b-0 pl-4 mb-4">Contact</h2>
    <p>Email: shahbholapd@gmail.com</p>
    <a href="https://github.com/bholey-beep" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline">
      GitHub Profile
    </a>
  </section>
</div>
)
}

export default Contact
