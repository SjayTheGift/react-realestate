import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import NotFound from './pages/NotFound';
import { PrivateRoute } from './utils/PrivateRoute';
import { history } from './utils/_Helpers';


function App() {

  // init custom history object to allow navigation from 
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();


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

  const { city, sale_type, province, price, bedrooms, home_type, bathrooms, sqft } = formData;

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
    axios.get(`https://realestateza.up.railway.app/api/listings/search/?search=${city}&sale_type=${sale_type}&province=${province}&price=${price}&bedrooms=${bedrooms}&home_type=${home_type}&bathrooms=${bathrooms}&sqft=${sqft}`, config)
    .then(res => {
        setLoading(true);
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
    await fetch("https://realestateza.up.railway.app/api/listings/")
       .then(response => {
         return response.json()
       })
       .then(data => {
         setListings(data)
         setLoading(true);
       })
   }
 
   useEffect(() => {
     fetchUserData()
   }, [loading])


  return (
    <div className="font-[Poppins] bg-white h-screen">
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route path='/'  element={<Home
          onSubmit={onSubmit}
          onChange={onChange}
          city={city}
          sale_type={sale_type}
          province={province}
          price={price}
          bedrooms={bedrooms}
          home_type={home_type}
          bathrooms={bathrooms}
          sqft={sqft}
          listings={listings}
          loading={loading}
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
    </div>
  )
}

export default App
