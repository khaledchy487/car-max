import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const CarDetails = () => {
  const{carID} = useParams();
    const [cars,setCars] = useState([]);
    useEffect (()=> {
        fetch('https://thawing-harbor-39490.herokuapp.com/addCar')
        .then(res=> res.json())
        .then(data=> setCars(data))
    },[]);
    let matchedCar = cars?.find(car => car._id === carID)
    console.log(matchedCar);
  return (
    <div className='d-flex justify-content-between align-items-center '>
    <div className='m-5 '>
       <h1>{matchedCar?.title}</h1>
       <div><img src={matchedCar?.image} width="25%" alt ="" /></div>
       <div>
         <p>{matchedCar?.description}</p><br/>
         <h4>
           Price :{matchedCar?.price}
         </h4>

       </div>

       </div>
       <form>
         <h1>hi</h1>
       </form>
       </div>
  );
};

export default CarDetails;