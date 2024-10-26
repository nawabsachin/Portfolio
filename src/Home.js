import React from 'react';
import myImage from './Image/11.jpg'; 


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Sachin</h1>
        <h3>And I'm a <span className="multiple-text">Web Developer</span></h3>
        <div className="social-media">
          <a href="https://github.com/nawabsachin"><i className='bx bxl-github'></i></a>
          <a href="#"><i className='bx bxs-envelope'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/sachin-sharma-047a1127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='bx bxl-linkedin-square'></i></a>
        </div>
        <a href="C:\users\sharm\Downloads\Telegram Desktop\resume sachin.pdf" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={myImage} alt="Sachin" />
      </div>
    </section>
  );
};

export default Home;
