import React from 'react';
import Heading from './Heading'; // Component for heading area
import Body from './Body'; // Component for body area
import Footer from './Footer'; // Component for footer area

const HomePage = () => {
  return (
    <div>
      <Heading />   
      <Body />
      <Footer />
    </div>
  );
};



/* const HomePage = () => {
    return (
      <div>
        <h1>Temporary Heading Placeholder </h1>
        <p>Temporary Body Placeholder</p>
        <p>Temporary Footer Placeholder</p>
      </div>
    );
  }; */
  
export default HomePage;
