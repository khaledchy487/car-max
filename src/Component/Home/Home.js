import React from 'react';
import About from '../About/About';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';

import HeroSection from '../HeroSection/HeroSection';


import Review from '../Review/Review';
import Statistics from '../Statistics/Statistics';

function Home() {
  return (
    
    <div>

        <HeroSection/>
        <Cars/>
        <About/>
        <Statistics/>
        <Review/>
        <Contact/>
      
      
    </div>
  )
}

export default Home;