import React from 'react';
import './App.css'
import myImage1 from './Image/im3.jpg'; 
import myImage2 from './Image/img2.jpg'; 
import myImage3 from './Image/img1.jpg'; 

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={myImage1} alt="Project 1" />
          <div className="portfolio-layer">
            <h4>Personal Portfolio</h4>
            <p>
              
            In this project I try making my own portfolio website for myself. Showcase my projects, my social media handles, my experience on the website.
            </p>
            <a href="#"><i className='bx bx-link-external'></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={myImage2} alt="Project 1" />
          <div className="portfolio-layer">
            <h4>Dennison</h4>
            <p>
            The Dennison website is designed to embody the brand's core philosophy of making affordable ready-to-wear apparel accessible to a broader audience.
            </p>
            <a href="https://dennison.in/" target="_blank"><i className='bx bx-link-external'></i></a>
          </div>
        </div>

         <div className="portfolio-box">
          <img src={myImage3} alt="Project 1" />
          <div className="portfolio-layer">
            <h4>Aeshvi</h4>
            <p>
            The website is visually appealing, utilizing a clean and elegant design that mirrors the sophistication of the jewellery it represents.
            </p>
            <a href="https://aeshvi.com/" target="_blank"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        {/* Repeat similar structure for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;
