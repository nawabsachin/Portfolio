import React from 'react';
import './App.css';
import myImage from './Image/im1.jpg'; 




const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={myImage} alt="About Me" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>
        Frontend developer with experience building singlre-page web application and a knack for creating attractive user interfaces.
        skilled experience in javascript,HTML,CSS,PHP,BOOTSTRAP.
        </p>
        <a  href="/src/AboutDetails.js"  className="btn">Read More</a>
      
      </div>
    </section>
  );
};

export default About;
