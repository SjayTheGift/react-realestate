import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = ({name, email, subject, message, formData, setFormData}) => {

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

        axios.post('http://127.0.0.1:8000/api/contact/', { name, email, subject, message }, config)
        .then(res => {
            toast.success('Message sent!!!')
            setFormData({name:'', email:'', subject:'', message:''})
        })
        .catch(err => {
            toast.error(err.message)
            window.scrollTo(0, 0);
        })
        
    }

  return (
    <div>
      <form className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
        <div>
            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname</label>
            <input type="text" name="name" id="fullname" className="bg-gray-50 border border-gray-300 
            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="John Doe" required
            onChange={e => onChange(e)} value={name}  
            />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 
            sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="name@company.com" required
            onChange={e => onChange(e)}  value={email}
            />
        </div>
        <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
            <input type="text" name="subject" id="subject"   className="bg-gray-50 border border-gray-300 
            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
            required 
            onChange={e => onChange(e)} value={subject}
            />
        </div>
        <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea type="text" rows='4' name="message" id="message"   className="bg-gray-50 border border-gray-300 
            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Leave your message" required
            onChange={e => onChange(e)} value={message}
            ></textarea>
        </div>

        <button type="submit" className="w-full bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800  
        ease-in duration-300 hover:shadow-md text-white">
            Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm
