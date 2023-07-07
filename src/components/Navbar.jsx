import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../features/auth/authActions';
import { reset } from '../features/auth/authSlice';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gray-100');
  const [shadow, setShadow] = useState('#090a1a');
  const [showModal, setShowModal] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {   userToken  } = useSelector((state) => state.auth)


  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setShadow('shadow-lg');
        setBgColor('bg-white');
        
      } else {
        setBgColor('bg-gray-100');
        setShadow('shadow-none');
        // setTextColor('#ffffff');
      }
    };
    dispatch(reset());

    window.addEventListener('scroll', changeColor);
  }, [userToken]);

 const onLogout = () => {
  dispatch(logout());
  // dispatch(reset());
 }

  return (


    <header className={`${bgColor} ${shadow} bg-white fixed w-full z-[30] top-0 left-0`}>
        <nav className='flex justify-between items-center w-[75%] mx-auto py-3'>
            <div className='z-[30]'>
                <Link to='/' className='text-purple-600 font-bold text-2xl cursor-pointer'>Property</Link>
            </div>
            <div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 transition-all duration-300 ease-in-out ${nav ? 'top-[7.2%] opacity-100': 'top-[-1000%] opacity-0 md:opacity-100'} md:w-auto w-full flex flex-col justify-center items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] lg:gap-8 text-sm font-semibold'>
                    <li className='hover:text-purple-600 duration-500 md:my-0 my-3 cursor-pointer'>
                        <Link to="/" onClick={() => setNav(!nav)} >Home</Link>
                    </li>
                    <li className='hover:text-purple-600 duration-500 md:my-0 my-3 cursor-pointer'>
                        <Link to="/about" onClick={() => setNav(!nav)} >About</Link>
                    </li>
                    <li className='hover:text-purple-600 duration-500 md:my-0 my-3 cursor-pointer'>
                        <Link to="/contact" onClick={() => setNav(!nav)} >Contact</Link>
                    </li>
                </ul>
                <div className='flex gap-4 mt-5 md:hidden'>
                    <Link to='/login' className='bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-800' onClick={() => setNav(!nav)} >Sign In</Link>
                    <Link to='/register' className='border border-purple-600 text-purple-600 px-5 py-2 rounded-full hover:bg-purple-800 hover:text-white' onClick={() => setNav(!nav)} >Sign Up</Link>
                </div>
            </div>
            {userToken ? (
              <button className='
              bg-purple-600 text-white px-3 
              py-2 rounded-full 
              hover:bg-purple-800' onClick={() => {
                onLogout()
                setNav(!nav)}

              }>Logout</button>
            ) : (
              <div className='hidden md:flex gap-4 text-sm font-semibold'>
                <Link to='/login' className='bg-purple-600 text-white px-3 py-2 rounded-full hover:bg-purple-800' onClick={() => setNav(!nav)} >Sign In</Link>
                <Link to='/register' className='border border-purple-600 text-purple-600 px-3 py-2 rounded-full hover:bg-purple-800 hover:text-white' onClick={() => setNav(!nav)} >Sign Up</Link>
              </div>
            )}
            
            <div onClick={() => setNav(!nav)} className='text-2xl absolute right-8 cursor-pointer md:hidden'>
                    {nav ? <AiOutlineClose />  :<AiOutlineMenu /> }
            </div>
        </nav>
    </header>
  )
};

export default Navbar;