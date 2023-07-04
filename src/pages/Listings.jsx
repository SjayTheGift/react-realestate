import {useEffect, useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';



const Listings = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='bg-white h-full py-16'>
      
  <aside className={`fixed left-0 z-40 w-64 h-screen transition-transform ${nav ? 'top-0': '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
    <div className="h-full px-3 py-1 md:overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">
          <div className='flex justify-between'>
          <span>Sale or Rent</span>
            <AiOutlineClose className='cursor-pointer md:hidden' size={20} onClick={() => setNav(!nav)}/>
          </div>
          
        </label>
        
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Provinces</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Property Type</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Min Price</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Bedrooms</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Bathrooms</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Sqft</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="sale-or-rent" class="block rounded-lg dark:text-white my-2">Bathrooms</label>
          <select id="sale-or-rent" class="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
            <option selected>For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
      </div>
      <div className='flex justify-between my-3'>
        <button type="submit" className="w-full bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800  ease-in duration-300 hover:shadow-md text-white">Search</button>
      </div>
      

        
    </div>
  </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
            </div>
        </div>
      </div>
      {/* <button onClick={() => setNav(!nav)} data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

      </button> */}
      <div class='fixed bottom-[-32px] w-full'>
        <button onClick={() => setNav(!nav)} class='sm:hidden my-8 w-full px-5 py-2 bg-purple-600 text-white text-sm font-bold tracking-wide focus:outline-none'>Filters</button>
      </div>
  </div>
  )
}

export default Listings