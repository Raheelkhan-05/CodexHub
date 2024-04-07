import React, { useState, useEffect } from 'react';
import video from './Videos/video-2.mp4';
import Services from './ServicesWeOffer';
import '../index.css';

const Home = (props) => {
  const { isLoggedIn } = props; // Receive the isLoggedIn prop
  const [codingVisible, setCodingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const codingSection = document.getElementById('coding-section');
      if (codingSection) {
        const top = codingSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setCodingVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="row m-0 p-0 mt-2 pt-5 ">
      <div className="hero-container">
        <video src={video} autoPlay loop muted />
        <h1>Build your coding skills <br />
          through <strong style={{ color: "#0D6EFD" }}>CodexHub</strong></h1>
        <p>We will help you in every coding phase to <br /> design and build your skills. </p>
        <div className="mt-3">
          <button className="btn btn-primary btn-lg" style={{ borderRadius: '10px' }}>
            <a href={isLoggedIn ? '/contest' : '/login'} style={{ color: 'white' }}>
              {isLoggedIn ? "Explore now" : "Get Started"}
            </a>
          </button>
        </div>
      </div>

      <hr />

      <div id="coding-section" className={`coding-section ${codingVisible ? 'visible' : ''}`}>
        <Services />
      </div>

    </div>
  );
};

export default Home;