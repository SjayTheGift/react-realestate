import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../features/auth/authSlice';

import { login } from '../features/auth/authActions';

import Spinner from '../components/Spinner';

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Get data from redux store
    const {userToken, isLoading, isError,  isSuccess, message}  = useSelector(
        (state) => state.auth)

    useEffect(() => {
            if (isError) {
                toast.error(message)
            }
        
            if (isSuccess || userToken) {
                navigate('/')
            }
            // dispatch(reset())
    }, [userToken, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

  const onSubmit =  (e) => {
    e.preventDefault()
     // Run the authentication function
    dispatch(login(formData))
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900 h-screen'>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login User
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" placeholder="name@company.com" required 
                            onChange={e => onChange(e)} value={email}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border 
                            border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" required 
                            onChange={e => onChange(e)} value={password}
                            />
                        </div>
                        <button type="submit" className="w-full bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800 ease-in duration-300 hover:shadow-md text-white">
                            {isLoading ? <Spinner />: `Login`}
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1">Sign-up</Link> 
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignIn
