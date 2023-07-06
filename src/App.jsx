import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
// import Listings from './pages/Listings'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Details from './pages/Details'


function App() {


  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([])

  const [formData, setFormData] = useState({
    sale_type: 'For Sale',
    province: 'Eastern Cape',
    price: '0',
    bedrooms: '0',
    home_type: 'House',
    bathrooms: '0',
    sqft: '1000',
  });

  const { sale_type, province, price, bedrooms, home_type, bathrooms, sqft } = formData;

  const onChange =  (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    
    console.log(e.target.value)
    console.log(e.target.defaultValue)
  }

  console.log()

  const onSubmit = e => {
    e.preventDefault();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    
    setLoading(true);
    axios.get(`http://127.0.0.1:8000/api/listings/search/?sale_type=${sale_type}&province=${province}&price=${price}&bedrooms=${bedrooms}&home_type=${home_type}&bathrooms=${bathrooms}&sqft=${sqft}`, config)
    .then(res => {
        setLoading(false);
        // const pathname = window.location.pathname
      
        setListings(res.data);
        
    })
    .catch(err => {
        setLoading(false);
        toast.error(err.message);
        window.scrollTo(0, 0);
    })
  }

  const fetchUserData = async () => {
    await fetch("http://127.0.0.1:8000/api/listings/")
       .then(response => {
         return response.json()
       })
       .then(data => {
         setListings(data)
       })
   }
 
   useEffect(() => {
     fetchUserData()
   }, [])


  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='/'  element={<Home
          onSubmit={onSubmit}
          onChange={onChange}
          sale_type={sale_type}
          province={province}
          price={price}
          bedrooms={bedrooms}
          home_type={home_type}
          bathrooms={bathrooms}
          sqft={sqft}
          listings={listings}
          />}/>
          <Route path='/about'  element={<About/>}/>
          {/* <Route path='/listings'  element={<Listings 
          onSubmit={onSubmit}
          onChange={onChange}
          sale_type={sale_type}
          province={province}
          price={price}
          bedrooms={bedrooms}
          home_type={home_type}
          bathrooms={bathrooms}
          sqft={sqft}
          listings={listings}
          />}/> */}
          <Route path='/contact'  element={<Contact/>}/>
          <Route path='/login'  element={<SignIn/>}/>
          <Route path='/register'  element={<SignUp/>}/>
          <Route path='/details/:id'  element={<Details/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
