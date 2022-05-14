  import './App.css';
import Navbar from './Component/Navbar/Navbar';

import Cars from './Component/Cars/Cars';
import About from './Component/About/About';

import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetails from './Component/CarDetails/CarDetails';
import Registration from './Component/Registration/Registration';
import Login from './Component/Login/Login';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <div className='App'>
     <AuthProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/cars' element={<Cars/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cars/:carID' element={<CarDetails/>}/>
       <Route path='/registration' element={<Registration/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/admin' element={<AdminDashboard/>}/>

       
     </Routes>
     <Footer/>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
