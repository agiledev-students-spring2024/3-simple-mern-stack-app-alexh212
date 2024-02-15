import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import img from './alex.png';
const AboutUs = () => {
  return (
    <div>
      <h1>About</h1>
        <img src={img} alt="Alex" />
      <p>My name is Alex, I like music and walking</p>
    </div>
  );
};

export default AboutUs;
