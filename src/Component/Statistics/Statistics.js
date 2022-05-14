import "./Statistics.css" ;
import React from "react"
import { FaUsers } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";


const Statistics = () => {
  return (
    <div className='stat-style'>
    <div className='text-center mx-5'>
        <p className="text-danger my-5">CarMax Statistics</p><br/>
        <h2>We Expert Our Goals and We Strive<br/>To Provide Best</h2>
    </div>
    
    <div>
        
    <ul className='d-flex justify-content-center text-center m-5 p-5 ' style={{listStyle:" none"}}>
    <li className="stat_card">
      <h1><FaUsers /><br/>1072</h1>
      <h3><span>Happy Customers</span></h3>
      </li>
    
    
   <li className="stat_card">
     <h1><FaBusinessTime/><br/>82</h1>
     <h3><span>In Business</span> </h3>
     </li>
    
    
    <li className="stat_card">
      <h1><BiSupport/><br/>132</h1>
      <h3><span>Spport Case</span></h3>
      </li>
    </ul>
    
    </div>
    </div>
    
  
  );

  }
export default Statistics;