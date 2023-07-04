import contact from '../assets/img/contact.svg';

const Contact = () => {
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
  )
}

export default Contact
