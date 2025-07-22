import React, { useEffect } from 'react';
import AOS from 'aos';
const Contact = () => {
   useEffect(() => {
      AOS.init({ duration: 2000,
        once:true
       });
    }, []);
  
  return (
    <div    data-aos="fade-up"   style={{ backgroundColor: '#9d96b1', borderRadius: '10px',width:'1000px',justifySelf:'center',marginBottom:'6px' }}>
      
       <section id="" className="container" >
      <h2>Contact</h2>
      <p>Email: shahbholapd@gmail.com
        
        
      </p>
      <a href="https://github.com/bholey-beep" target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      
      
    </section>
 
    </div>
  )
}

export default Contact
