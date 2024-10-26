// // TechTools.js
// import React from 'react';
// import { FaReact, FaNodeJs, FaCss3Alt, FaGit, FaHtml5, FaBootstrap, FaJava } from 'react-icons/fa';
// import { SiPostman,    SiMongodb, SiFirebase,  SiMysql, SiJavascript} from 'react-icons/si';
// import './App.css'


// const TechTools = () => {
//   const tools = [
//     { name: 'C Language', icon: <FaJava /> }, 

//     { name: 'NodeJS', icon: <FaNodeJs /> },
//     { name: 'Postman', icon: <SiPostman /> },
    
   
//     { name: 'React Native', icon: <FaReact /> },
//     { name: 'HTML', icon: <FaHtml5 /> },
//     { name: 'CSS', icon: <FaCss3Alt /> },
//     { name: 'Bootstrap', icon: <FaBootstrap /> },
   
  
//     { name: 'JavaScript', icon: <SiJavascript /> },
   
//     { name: 'React', icon: <FaReact /> },
//     { name: 'MySQL', icon: <SiMysql /> },
//     { name: 'MongoDB', icon: <SiMongodb /> },
   
//     { name: 'Git', icon: <FaGit /> },
    
//   ];

//   return (
//     <div className="tech-tools">
//       <h3>Technologies and Tools</h3>
//       <p>
//         Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
//       </p>
//       <div className="tools-grid">
//         {tools.map((tool, index) => (
//           <div key={index} className="tool-card">
//             {tool.icon}
//             <p>{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechTools;



// TechTools.js


import React from "react";
import Slider from "react-slick";
import { FaReact, FaNodeJs, FaCss3Alt, FaGit, FaHtml5, FaBootstrap, FaJava } from "react-icons/fa";
import { SiPostman, SiMongodb, SiFirebase, SiMysql, SiJavascript } from "react-icons/si";
import "./App.css";
import './Tech.css'


const TechTools = () => {
  const tools = [
    { name: "C Language", icon: <FaJava /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGit /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // On mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="tech-tools">
      <h3>Technologies and Tools</h3>
      <p>
        Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused,
        performant apps and websites for smartphones, tablets, and desktops.
      </p>

      {/* Slider for mobile, grid for desktop */}
      <div className="mobile-slider">
        <Slider {...settings}>
          {tools.map((tool, index) => (
            <div key={index} className="tool-slide">
              <div className="tool-icon">{tool.icon}</div>
              <p>{tool.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for desktop view */}
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            {tool.icon}
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTools;

