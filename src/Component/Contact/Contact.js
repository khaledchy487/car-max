import React from 'react';
import "./Contact.css";


const Contact = () => {
  return (
    <div id='contactus'>
       <div className='text-center mx-5'>
        <span className="text-danger"><br/>Contact Us</span><br/><br/><br/>
        <h1>If You Have Any Question
Drop A Message</h1>
        </div>
        <div className='d-grid text-center p-5'>
        <form >
  <label >
    <input type="text" placeholder='Your Name' className='border-0 rounded'  />
  </label> <br/><br/>
  <label>
    <input type="email" placeholder='Your Email' className='border-0 rounded' />
  </label><br/><br/>
  <label>
    <input type="number" placeholder='Your Number' className='border-0 rounded'  />
  </label><br/><br/>
  <label>
    <textarea name="text" placeholder='Your Message' className='border-0 rounded' />
  </label><br/><br/>
  <label >
    <input type="submit" value="Send Message" className="bg-primary border-0 rounded"/>
  </label><br/>

 
</form>
        </div>
</div>
  );

  }
export default Contact;