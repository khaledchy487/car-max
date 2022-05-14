import React from 'react';
import "./Footer.css"
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {HiLocationMarker} from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className= 'footer_style'>
      <div>
      <div className="w-sm-50 w-md-50 d-flex mb-3">
        <img className="img-fluid" src="https://i.ibb.co/qs5f7wQ/carmax-logo.png" alt=""/>
          <span className="text-danger" >CarMax</span>
          </div>
          <p>Choose from over 1 thousand cars in more than 200 countries, 1000 <br/>
           professional's reviews. Book car to over 5000 destinations worldwide.</p>
          </div>
          <div>
            <h4 className="text-danger">Contact</h4>
            <p><BsFillTelephoneFill/>Phone <br/><span>01719332361</span></p>
            <p><MdEmail/>Email <br/><span>khaledchy487@gmail.com</span></p>
            <p><HiLocationMarker/>Location <br/><span>Sylhet</span></p>
          </div>
          <div>
            <h4 className="text-danger">About Us</h4>
            <ul className='d-grid m-0 p-0 demo' style={{listStyle:" none"}}>
                <li className='mx-3'><Link to ={"/cars"}>Cars</Link></li>
                <li className='mx-3'><Link to ={"/about"}>About</Link></li>
                <li className='mx-3'><Link to ={"/contact"}>Contact</Link></li>

            </ul>
        </div>
        <div>
          <h4 className="text-danger">Support</h4>
          <ul className='d-grid '>
            <li>Best Instruction Guide</li>
            <li>Luxury Cars</li>
            <li>World Class Service</li>
            <li>Original Spare Parts</li></ul>
        </div>


    </div>

  );

  }
export default Footer;
