import React from 'react';
import bhol from './assets/bhol.jpg';
import hero from './assets/h.mp4';


function Header({ toggleMode, isDarkMode }) {
  return (
    <header>
      <video width="1260px" height=""  src={hero} autoPlay muted loop className='video'>
  
</video>
      <div className="bhola">
       <img
       className='h'
  src={bhol}
  alt="circle"
  
/>

        <div className="hero">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1    className= 'back' style={{ 
  fontSize: '62px',}}>Hello,   I'm B.P </h1>
          <br />
          <h3 className= 'back' style={{ 
  fontSize: '32px',}}>Frontend Developer | UI/UX Designer</h3>
          <button id="modeToggle" onClick={toggleMode}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
