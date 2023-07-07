import { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../features/auth/authSlice';

import { register } from '../features/auth/authActions';
import Spinner from '../components/Spinner';

const SignUp = () => {
  const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { first_name, last_name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Get data from redux store
    const {userToken, isLoading, isError,  isSuccess, message}  = useSelector(
        (state) => state.auth)


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
    
        if (isSuccess) {
            navigate('/login')
        }
    
        dispatch(reset())
    }, [userToken, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }



  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2){
        toast.error('Passwords do not match')
    }else{
        // Run the registration function
        dispatch(register(formData))
    }
  }

  const bgColor = 'dark:bg-gray-900'

 

  return (
    <section className={`bg-gray-50 ${bgColor} h-full py-8`}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your FirstName</label>
                            <input type="text" name="first_name" id="first_name"   
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="John" required 
                            onChange={e => onChange(e)} value={first_name}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your LastName</label>
                            <input type="text" name="last_name" id="last_name"  
                            className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                             placeholder="Doe" required 
                             onChange={e => onChange(e)} value={last_name}
                             />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" placeholder="name@company.com" required 
                            onChange={e => onChange(e)} value={email}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password"  placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                             dark:focus:border-blue-500" required
                             onChange={e => onChange(e)} value={password}
                             />
                        </div>
                        <div>
                            <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" name="password2" id="password2"  placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                            onChange={e => onChange(e)} value={password2}
                            />
                        </div>

                        <button type="submit" className="w-full bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800  ease-in duration-300 hover:shadow-md text-white">{ isLoading ? <Spinner className='text-center'/> : `Create an account` }</button>

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp
