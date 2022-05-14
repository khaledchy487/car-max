import React from 'react';
import "./HeroSection.css" ;
import {ImArrowRight} from 'react-icons/im';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className ='container text-light'>
        <h1 >Welcome to <br/> Car <span className='text-danger'>Max</span></h1>
        <p>
            CarMax Verso focuses on luxury cars,performance cars and also on unique limited edition vehicles. The blog contains a range of car reviews as well as products,gadgets and accessory reviews.
        </p>
        <button className='bg-danger border-0 rounded cars-btn'><Link to ={"/cars"}>Explore our Cars <ImArrowRight/></Link> </button>

    </div>
  );

  }
export default HeroSection;