import {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const SearchHero = ({onSubmit, onChange, sale_type, province, price, bedrooms, home_type, bathrooms, sqft, listings}) => {

  const [nav, setNav] = useState(false);

  return (
    <>
      <div className={`fixed top-0 left-0 z-40 md:z-10 w-80 h-screen md:h-auto transition-transform shadow-r-2xl  
                  md:block md:relative bottom-3 bg-gray-50 shadow-lg border border-b-gray-50 md:w-[70%] 
                  mx-auto py-4 md:px-8 px-1 md:rounded-lg ${nav ? 'top-0': '-translate-x-full'} md:translate-x-0`}>
          <form onSubmit={e => onSubmit(e)}>

            <div className='flex justify-between mb-3'>
              <div></div>
              <AiOutlineClose className='cursor-pointer md:hidden' size={30} onClick={() => setNav(!nav)}/>
            </div>

          <div className="md:relative mb-5">
              <div className="hidden md:absolute inset-y-0 left-0 md:flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="search" 
              className="block w-full p-3 md:p-4 pl-5 md:pl-10 text-sm text-gray-900 border 
              border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
              focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
               dark:focus:border-blue-500" placeholder="Enter City" required 
               />
              <button type="submit" className="text-white hidden md:block  md:absolute top-2 mt-5 md:mt-0 md:right-2.5 md:bottom-2.5 bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800">Search</button>
          </div>


            <div className='flex flex-col md:flex-row md:flex-wrap md:gap-4'>
              <div>
                <label htmlFor="saleOrRent" className="block mb-2 text-sm font-medium text-gray-900">Sale or Rent</label>
                <select id="saleOrRent" 
                  className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
                  focus:border-blue-500 dark:bg-gray-700 
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  name='sale_type'
                  onChange={e => onChange(e)} value={sale_type}>
                    <option defaultValue='For Sale'>For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
              </div>

              <div>
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Min Price</label>
                <select id="price" className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg 
                bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                name='price'
                onChange={e => onChange(e)} value={price}>
                  <option value='0'>$0+</option>
                  <option value='200000'>$200,000+</option>
                  <option value='400000'>$400,000+</option>
                  <option value='600000'>$600,000+</option>
                  <option value='800000'>$800,000+</option>
                  <option value='1000000'>$1,000,000+</option>
                  <option value='1200000'>$1,200,000+</option>
                  <option value='1500000'>$1,500,000+</option>
                </select>
            </div>

              <div>
                <label htmlFor="bedrooms" className="block mb-2 text-sm font-medium text-gray-900">Bedrooms</label>
                <select id="bedrooms" className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg 
                bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                name='bedrooms'
                onChange={e => onChange(e)} value={bedrooms}>
                  <option value='0'>0+</option>
                  <option value='1'>1+</option>
                  <option value='2'>2+</option>
                  <option value='3'>3+</option>
                  <option value='4'>4+</option>
                  <option value='5'>5+</option>
                </select>
              </div>

              <div>
                  <label htmlFor="home_type" className="block mb-2 text-sm font-medium text-gray-900">Property Type</label>
                  <select id="home_type" className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg 
                  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  name='home_type'
                  onChange={e => onChange(e)} value={home_type}>
                    <option>House</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                  </select>
              </div>

              <div>
                  <label htmlFor="bathrooms" className="block mb-2 text-sm font-medium text-gray-900">Bathrooms</label>
                  <select id="bathrooms" className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg 
                  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  name='bathrooms'
                  onChange={e => onChange(e)} value={bathrooms}>
                    <option value='0'>0+</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                  </select>
              </div>

              <div>
                  <label htmlFor="sqft" className="block mb-2 text-sm font-medium text-gray-900">Sqft</label>
                  <select id="sqft" className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg 
                  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  name='sqft'
                  onChange={e => onChange(e)} value={sqft}>
                    <option value='1000'>1000+</option>
                    <option value='1200'>1200+</option>
                    <option value='1500'>1500+</option>
                    <option value='2000'>2000+</option>
                  </select>
              </div>
              
              <div>
                <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900">Provinces</label>
                <select id="province" name='province' className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg 
                bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                onChange={e => onChange(e)} value={province}>
                  <option>Eastern Cape</option>
                  <option value='Free State'>Free State</option>
                  <option>Gauteng</option>
                  <option>KwaZulu-Natal</option>
                  <option>Limpopo</option>
                  <option>Mpumalanga</option>
                  <option>Northern Cape</option>
                  <option>North West</option>
                  <option>Western Cape</option>
                  
                </select>
              </div>
              <button onClick={() => setNav(!nav)} className='md:hidden my-8 w-full px-5 py-2 bg-purple-600 text-white text-sm font-bold tracking-wide focus:outline-none'>Filters</button>
            </div>
          </form>
        </div>

        <div className='fixed bottom-[-32px] w-full'>
          <button onClick={() => setNav(!nav)} className='md:hidden my-8 w-full px-5 py-2 bg-purple-600 text-white text-sm font-bold tracking-wide focus:outline-none'>Filters</button>
        </div>
    </>
  )
}

export default SearchHero
