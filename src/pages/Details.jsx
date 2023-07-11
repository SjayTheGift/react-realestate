import { useState, useEffect } from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { useParams } from "react-router-dom"

import Spinner from '../components/Spinner';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ContactForm from '../components/ContactForm'
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { BiBed } from 'react-icons/bi';
import { MdOutlineBathtub } from 'react-icons/md';

const Details = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [detailListings, setDetailListings] = useState([])
    const [realtor, setRealtor] = useState([])

    const fetchSingleUserData = async () => {

        await fetch(`http://ec2-54-159-235-125.compute-1.amazonaws.com:8000/api/listings/${id}/`)
          .then(response => { 
            return response.json()
          })
          .then(data => {
            setDetailListings(data)
            const realtor_id = data.realtor
            
            fetch(`http://ec2-54-159-235-125.compute-1.amazonaws.com:8000/api/realtor/${realtor_id}/`)
                   .then(response => { 
                     return response.json()
                   })
                   .then(data => {
                    //  console.log(data)
                     setRealtor(data)
                     setLoading(true)
            })
            
          })
      }
    
    useEffect(() => {
        fetchSingleUserData()
    }, [])

    const [formData, setFormData] = useState({});
    const { name, email, subject, message } = formData;
    
  return (

    

    <div className='h-screen bg-white text-black py-16'>

    

    <div className='grid grid-cols-6 w-[75%] mx-auto py-3 gap-4'>
        <div className='col-start-1 col-span-8 lg:col-start-2 lg:col-span-4'>
            { loading ?
            <Carousel>
               
                    {detailListings.photos?.map((photo) => 
                     <div key={photo.id}>
                       <img src={photo.image} />
                    </div>
                    )}
                
            </Carousel>
            :
            <div className="absolute left-[50%] mb-5">
              <Spinner  className='self-auto w-9'/>
            </div>
            }
        </div>
    </div>
    
        <div className='grid lg:grid-cols-3 w-[75%] mx-auto py-3 gap-4'>
            <div className='lg:col-span-2'>

                <div>
                    <h3 className='my-3 text-xl font-bold'>{detailListings.title}</h3>
                    <span className='mr-1 font-semibold'>{detailListings.address} {detailListings.province}</span> 
                    <div className='flex flex-wrap flex-row gap-2'>
                        <div className='flex flex-row items-center'>
                            <BiBed className='mr-2'/> {detailListings.bedrooms}
                        </div>
                        <div className='flex flex-row items-center'>
                            <MdOutlineBathtub className='mr-2'/> {detailListings.bathrooms}
                        </div>
                    </div>
                </div>



                
                <div>
                    <h3 className='my-3 text-xl font-bold'>Overview</h3>
                    <p className='text-gray-600'> {detailListings.description}
                    </p>
                </div>
                <div className='my-4'>
                    <h3 className='my-3 text-xl font-bold'>Property Details</h3>
                    <ul className='text-gray-600'>
                        <li><span className='mr-1 font-semibold'>Type:</span> {detailListings.home_type}</li>
                        <li><span className='mr-1 font-semibold'>Apartment area: </span> {detailListings.sqft} sq.m</li>
                        <li><span className='mr-1 font-semibold'>Bedrooms:</span> {detailListings.bedrooms} </li>
                        <li><span className='mr-1 font-semibold'>Bathrooms:</span> {detailListings.bathrooms} </li>
                        {/* <li><span className='mr-1 font-semibold'>Parking places:</span> 2</li> */}
                        {/* <li><span className='mr-1 font-semibold'>Pets allowed:</span>   cats only</li> */}
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
                        <ContactForm 
                        name={name} 
                        email={email} 
                        subject={subject} 
                        message={message}
                        formData={formData}
                        setFormData={setFormData}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Details