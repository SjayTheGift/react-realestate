
const SearchHero = () => {
  return (
    <>
      <div className='relative bottom-3 bg-gray-50 shadow-lg border border-b-gray-50 w-[70%] mx-auto py-4 md:px-8 px-1 rounded-lg'>
          <form action="">

          <div class="md:relative mb-5">
              <div class="hidden md:absolute inset-y-0 left-0 md:flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="submit" class="text-white md:absolute mt-5 md:mt-0 md:right-2.5 md:bottom-2.5 bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800">Search</button>
          </div>


            <div className='flex flex-wrap md:gap-4'>
              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Sale or Rent</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Min Price</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Bedrooms</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Property Type</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Bathrooms</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Sqft</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Days Listed</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              
              <div>
                <label htmlFor="sale-or-rent" class="block mb-2 text-sm font-medium text-gray-900">Provinces</label>
                <select id="sale-or-rent" class="md:w-full p-2 mr-5 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                  <option selected>For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>
              
            </div>
            
          </form>
        </div>
    </>
  )
}

export default SearchHero
