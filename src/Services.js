import React from 'react';
import './App.css'

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className='bx bx-code-alt'></i>
          <h3>Web Development</h3>
          <p>Motivated designer and developer with experience creating custom websites...</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <i className='bx bx-crop'></i>
          <h3>UI/UX Design</h3>
          <p>You cannot make a good design if you do not understand people; design is made for people.</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <i className='bx bxl-instagram-alt'></i>
          <h3>App Design</h3>
          <p>I'm a UI/UX Designer with a great passion for my work...</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
