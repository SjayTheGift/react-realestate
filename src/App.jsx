import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Listings from './pages/Listings'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Details from './pages/Details'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/listings'  element={<Listings/>}/>
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
