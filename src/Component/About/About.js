import "./About.css" ;
import React from "react"
const About = () => {
    
  return (
      <div id="aboutus" >
    <div className='text-center mx-5'>
        <span className="text-danger"><br/>About Us</span><br/><br/><br/>
        <h2>Every Time We Provide<br/>Best Service</h2>
        </div>
      
        <div className=' d-flex justify-content-between align-items-center  mx-5'>
        <div className="img-fluid rounded ">
            <img  src="https://i.ibb.co/9pvfG1Z/3385c20a29c182909bd2e61259aff7c5.jpg"  alt="about us" className="rounded"/>
        </div>
        <div className="d-flex flex-wrap  justify-content-between  mx-5 p-5 ">
         <div className="d-flex  mx-3">
                <div ><img src="https://i.ibb.co/hgWgqrG/service-removebg-preview.png*" width={50}  alt=""/></div>
                <div><h4>Best Instruction Guide</h4>
                <p>Make sure the car is nuetral before releasing the clutch. The neutral slot is the empty space between the gears,represented by the bar in the middle of the "H."</p>
            </div>
            </div>
            <div className="d-flex  mx-3">
               <div><img src="https://i.ibb.co/Hp4CCrm/world-removebg-preview.png" width={50} alt=""/></div> 
                <div><h4>Luxury Cars</h4>
                   <p> A luxury car is a car that provides increased levels of comfort, equipment, quality, performance, and status compared to regular cars for an increased price. 
                </p>
            </div>
            </div>
            <div className="d-flex mx-3">
                <div><img src="https://i.ibb.co/RHd2Lv2/taxi-removebg-preview.png" width={50} alt=""/></div>
                <div>
                <h4>World Class Service</h4>
                <p>World  class service is defined as vastly exceeding customers' expectations and building brand loyalty as a result.World class service can help. </p>
                </div>
            </div>
            <div className="d-flex mx-3">
                <div><img src="https://i.ibb.co/9ntbd9w/spare-Parts.png" width={50} alt="food" className="rounded-circle" /> </div>
                <div><h4>Original Spare Parts</h4>
                <p>A spare part, spare, service part, repair part, or replacement part, is an interchangable part that is kept in an inventory and used</p>
            </div>
            </div>
        </div>
        </div>
        </div>
      
  );

  }

export default About;