import { useState, useEffect } from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { useParams } from "react-router-dom"

import person from '../assets/img/02.webp'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Details = () => {
    const { id } = useParams();

    const [detailListings, setDetailListings] = useState([])
    const [realtor, setRealtor] = useState([])

    const fetchSingleUserData = async () => {

        await fetch(`http://127.0.0.1:8000/api/listings/${id}/`)
          .then(response => { 
            return response.json()
          })
          .then(data => {
            // console.log(data)
            setDetailListings(data)
            // console.log(data.realtor)
            
            const realtor_id = data.realtor
            
            fetch(`http://127.0.0.1:8000/api/realtor/${realtor_id}/`)
                   .then(response => { 
                     return response.json()
                   })
                   .then(data => {
                    //  console.log(data)
                     setRealtor(data)
            })
            



          })
      }
    
    useEffect(() => {
        fetchSingleUserData()
    }, [])

    const [visible, setVisible] = useState(true);

  return (
    <div className='h-screen bg-white text-black py-16'>

    <div className='grid grid-cols-6 w-[75%] mx-auto py-3 gap-4'>
        <div className='col-start-1 col-span-8 lg:col-start-2 lg:col-span-4'>
            <Carousel>
               
                    {detailListings.photos?.map((photo) => 
                     <div key={photo.id}>
                       <img src={photo.image} />
                    </div>
                    )}
                
            </Carousel>
        </div>
    </div>
    
    
    




        <div className='grid lg:grid-cols-3 w-[75%] mx-auto py-3 gap-4'>
            <div className='lg:col-span-2'>
                <div>
                    <h3 className='my-3 text-xl font-bold'>Overview</h3>
                    <p className='text-gray-600'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor.
                         Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id 
                         pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.
                    </p>
                </div>
                <div className='my-4'>
                    <h3 className='my-3 text-xl font-bold'>Property Details</h3>
                    <ul className='text-gray-600'>
                        <li><span className='mr-1 font-semibold'>Type:</span> {detailListings.home_type}</li>
                        <li><span className='mr-1 font-semibold'>Apartment area: </span> 56 sq.m</li>
                        <li><span className='mr-1 font-semibold'>Built:</span> 2015</li>
                        <li><span className='mr-1 font-semibold'>Bedrooms:</span> 4</li>
                        <li><span className='mr-1 font-semibold'>Bathrooms:</span> 2</li>
                        <li><span className='mr-1 font-semibold'>Parking places:</span> 2</li>
                        <li><span className='mr-1 font-semibold'>Pets allowed:</span>   cats only</li>
                    </ul>
                </div>

            </div>
            <div className='w-[100%]'>
                <div className="w-full bg-white rounded-lg shadow dark:border text-white  dark:bg-gray-800">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className='space-y-1'>
                            {/* <img src={person} width={80} className='rounded-full my-2'/> */}
                            <h1>{realtor.name}</h1>
                            <p>Property Group Agent</p>
                            <p className='flex items-center'><BiPhoneCall  className='mr-1' size={20}/>{realtor.phone}</p>
                            <p className='flex items-center'><HiOutlineMail className='mr-1' size={20}/>{realtor.email}</p>
                        </div>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Fullname</label>
                                <input type="text" name="fullname" id="fullname" value=''  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input type="email" name="email" id="email" value='' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                                <textarea type="text" rows='4' name="first_name" id="first_name" value=''  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave your message" required=""></textarea>
                            </div>

                            <button type="submit" className="w-full bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800  ease-in duration-300 hover:shadow-md text-white">Create an account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details