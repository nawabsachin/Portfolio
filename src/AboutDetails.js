import React from "react";
// import './one.css'; // Assuming you still need external CSS

const AboutDetails = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: 'gray',
      color: 'white',
      lineHeight: '1.6',
    },
    aboutDetails: {
      maxWidth: '800px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    hoverEffect: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    },
    h2: {
      marginBottom: '20px',
      fontSize: '2.5em',
      color: '#007BFF',
      animation: 'fadeIn 1s',
    },
    p: {
      fontSize: '1.1em',
      margin: '20px 0',
      animation: 'fadeIn 1.5s',
    },
    h3: {
      fontSize: '1.8em',
      color: '#333',
      margin: '20px 0 10px',
      animation: 'fadeIn 2s',
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
      animation: 'fadeIn 2.5s',
    },
    li: {
      background: 'gray',
      color: 'white',
      fontWeight: 'bold',
      margin: '10px 0',
      padding: '10px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    liHover: {
      background: '#0056b3',
    },
    backBtn: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: '#28a745',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
      marginTop: '20px',
      fontSize: '1.1em',
    },
    backBtnHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div style={styles.aboutDetails}>
      <h2 style={styles.h2}>About Me - More Details</h2>
      <p style={styles.p}>
        I am a passionate Frontend Developer with a strong background in designing and developing responsive web applications.
        My expertise includes working with modern JavaScript frameworks like React and building user-friendly interfaces that 
        provide seamless user experiences. I am always eager to learn new technologies and improve my skills to stay current 
        with the latest trends in web development.
      </p>
      <h3 style={styles.h3}>Skills:</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>JavaScript (ES6+)</li>
        <li style={styles.li}>HTML5 & CSS3</li>
        <li style={styles.li}>React</li>
        <li style={styles.li}>Node.js & MySQL</li>
        <li style={styles.li}>Bootstrap</li>
      </ul>
      <a href="/src/About.js" style={styles.backBtn}>Back to About</a>
    </div>
  );
};

export default AboutDetails;
