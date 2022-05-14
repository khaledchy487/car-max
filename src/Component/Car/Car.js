import React from 'react'


const Car = (props) => {
    console.log(props);
    const {image,title,price}=props?.item;
  return (
    <div key={Car?._id} className="w-25 mx-3 package rounded">
    <div ><img src={image} width="100%" alt ="" /></div>
    <h3>{title}</h3>
    <p>Price :${price}</p>
    <div> 
        <button className='btn-danger'>Book now</button>
        </div>


    </div>
  );
};

export default Car;