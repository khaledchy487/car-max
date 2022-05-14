import { useEffect, useState } from "react";
import "./Cars.css" ;
import { Link } from 'react-router-dom';

const Cars = () => {
    const [cars,setCars] = useState(); 
    const [filterData, setFilterData] = useState();
    // const[filteredCar,setFilteredCar] = useState({
    //     name: "",
    //     priceFrom: 0,
    //     priceTo: 0,
    //     fuel: ""
    // });
    const [name, setName] = useState("")
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(0)
    const [fuel, setFuel] = useState("")
    useEffect(() => {
        fetch('./file.json')
        .then(res=> res.json())
        .then(data=>{
            setCars(data)
            setFilterData(data)
        })
    },[])
    // const handleNameSearch = (e) => {
    //     const searchName = e.target.value ;
    //     console.log(searchName);
    //     let findCars = cars.filter(car => car.title.toLowerCase().includes(searchName?.toLowerCase()));
    //     console.log(findCars); 
    //     setFilteredCar(findCars);

    // }
    // const handlePriceSearch = (p) => {
    //     const searchPrice = p.target.value ;
    //     console.log(searchPrice);
    //     let findCars = cars.filter(car => typeof(parseInt(car.price)).includes(searchPrice?.typeof(parseInt)));
    //     console.log(findCars);
    //     setFilteredCar(findCars);
    // }
    // const handleBrandSearch = (b) => {
    //     const searchBrand = b.target.value ;
    //     console.log(searchBrand);
    //     let findCars = cars.filter(car => car.price);
    //     console.log(findCars);
    //     setFilteredCar(findCars);
    // }
const handleSubmit = (e) =>{
    e.preventDefault();
    
    console.log(name,fuel,priceFrom)
    if(name !== "" || fuel !== "" || priceFrom !== "" || priceTo !== ""){
        let data = cars.filter(car => car.title.toLowerCase().includes(name.toLowerCase()) && car.fuel.toLowerCase().includes(fuel.toLowerCase()) && parseInt(priceFrom) <= parseInt(car.price) && parseInt(priceTo) >= parseInt(car.price));
        // console.log(data)
        setFilterData(data);
    }
}
    return (
        <div >
        <div className='text-center p-5' >
            <span className="text-danger">Popular Cars</span><br/><br/>
            <h3>Most Popular Cars <br/> In our Shop</h3><br/>
            <div>
                <form onSubmit={handleSubmit}>
            <input type="text" onChange={e=> setName(e.target.value)} placeholder="Search by Name" /> <br/>
            {/* <input type="text" placeholder="Search by " onChange={e=> setName(e.target.value)}/> <br/> */}
            <select name="" id="" onChange={e=> setFuel(e.target.value)}>
                <option value="">select option</option>
                <option value="petrol">petrol</option>
                <option value="diesel">diesel</option>
                <option value="cng">cng</option>
            </select>
            <input type="text" placeholder="Search by Price from" onChange={e=> setPriceFrom(e.target.value)}/>
            <input type="text" placeholder="Search by Price to" onChange={e=> setPriceTo(e.target.value)}/>
            <input type="submit" value="submit" />
            </form>
            </div>
            </div>
            <div className=' d-flex flex-wrap justify-content-between justify-item-center  mx-5'>
                    {
                   filterData?.map(item =>
                   <div  key={item?._id} className="w-25 mx-3 package rounded">
                       <div ><img src={item?.image} width="100%" alt ="" /></div>
                       <h3>{item?.title}</h3>
                       <p>Price :{item?.price}/-</p>
                       <p>fuel :{item?.fuel}</p>
                       <div> 
        <Link to ={`/cars/${item?._id}`} ><button className='btn-danger border-0'>Book now</button></Link>
        </div>
     </div> )
                    }
                
            </div>
        </div>
    
      );
    
      }
    export default Cars;