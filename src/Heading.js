import React from 'react';
import logo from '../src/images/logo.jpeg';
const Heading = () => {
  return (
    <header>
      <img src={logo} alt="Your Logo" />  {/* Replace with your logo image */}
      <h1>Software World Memes</h1>
    </header>
  );
};

export default Heading;
