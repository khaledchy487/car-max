import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css" ;

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center mx-3'>
        <div>
            <img src={"https://i.ibb.co/qs5f7wQ/carmax-logo.png"} alt="" />
        </div>
        <div>
            <ul className='d-flex m-0 p-4 justify-content-center demo' style={{listStyle:" none" }}>
                
                <li ><Link to ={"/home"} className={"nav-btn"}>Home </Link></li>
                <li ><Link to ={"/cars"} className={"nav-btn"}>Cars</Link></li>
                <li > <HashLink to ={"/home#aboutus"}  className={"nav-btn"}> About Us</HashLink></li>
                <li > <HashLink to ={"/home#contactus"} className={"nav-btn"}>Contact Us</HashLink></li>
                
                

            </ul>
        </div>
        <div>
            <button className='btn-reg '><Link to ={"/registration"} className="text-decoration-none  text-light ">Registration</Link></button>
            <button className='btn-login '><Link to ={"/login"} className="text-decoration-none  text-light">Login</Link></button>
        </div>

    </div>

  );

  }
export default Navbar;