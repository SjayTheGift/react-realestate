import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import contact from '../assets/img/contact.svg';

import ContactForm from '../components/ContactForm'

const Contact = () => {

  // const [contact, setListings] = useState([])

  const [formData, setFormData] = useState({});

  const { name, email, subject, message } = formData;


  return (
    <div className='bg-white h-full py-16'>
      <div className='flex flex-col md:flex-row justify-between items-center w-[75%] mx-auto py-3 gap-4 md:gap-0'>
        <div>
          <h2 className='font-semibold text-3xl text-center md:text-left'>Get in touch!</h2>
          <p className='my-5 text-gray-400 text-semibold'>Fill out the form and out team will try to get back to you within 24 hours.</p>
          <img src={contact} alt='contact'/>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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
  )
}

export default Contact
