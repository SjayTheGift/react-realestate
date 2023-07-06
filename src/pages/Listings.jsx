import {useEffect, useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import List from '../components/List'



const Listings = () => {

  const [nav, setNav] = useState(false);
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    sale_type: 'For Sale',
    province: 'Eastern Cape',
    price: '0',
    bedrooms: '0',
    home_type: 'House',
    bathrooms: '0',
    sqft: '1000',
  });

  const { sale_type, province, price, bedrooms, home_type, bathrooms, sqft } = formData;

  const onChange =  (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    
    console.log(e.target.value)
    console.log(e.target.defaultValue)
  }

  const onSubmit = e => {
    e.preventDefault();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    setLoading(true);
    axios.get(`http://127.0.0.1:8000/api/listings/search/?sale_type=${sale_type}&province=${province}&price=${price}&bedrooms=${bedrooms}&home_type=${home_type}&bathrooms=${bathrooms}&sqft=${sqft}`, config)
    .then(res => {
        setLoading(false);
        setListings(res.data);
        window.scrollTo(0, 0);
    })
    .catch(err => {
        setLoading(false);
        toast.error(err.message);
        window.scrollTo(0, 0);
    })
};


  const fetchUserData = async () => {
   await fetch("http://127.0.0.1:8000/api/listings/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setListings(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  console.log(province)



  return (
    <div className='bg-white h-full py-16'>
      
  <aside className={`fixed md:top-30 left-0 z-40 w-64 h-screen transition-transform shadow-r-2xl ${nav ? 'top-0': '-translate-x-full'} md:translate-x-0`} aria-label="Sidebar">
    <form className="h-full px-3 py-1 md:overflow-y-auto bg-gray-50 dark:bg-gray-800" onSubmit={e => onSubmit(e)}>
      <div>
        <label htmlFor="saleOrRent" className="block rounded-lg dark:text-white my-2">
          <div className='flex justify-between'>
          <span>Sale or Rent</span>
            <AiOutlineClose className='cursor-pointer md:hidden' size={20} onClick={() => setNav(!nav)}/>
          </div>
          
        </label>
        
          <select id="saleOrRent" 
          className="w-full p-2 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
          focus:border-blue-500 dark:bg-gray-700 
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
          name='sale_type'
          onChange={e => onChange(e)} defaultValue='For Sale' value={sale_type}>
            <option defaultValue='For Sale'>For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
      </div>
      <div>
        <label htmlFor="province" className="block rounded-lg dark:text-white my-2">Provinces</label>
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
      <div>
        <label htmlFor="home_type" className="block rounded-lg dark:text-white my-2">Property Type</label>
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
        <label htmlFor="price" className="block rounded-lg dark:text-white my-2">Min Price</label>
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
        <label htmlFor="bedrooms" className="block rounded-lg dark:text-white my-2">Bedrooms</label>
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
        <label htmlFor="bathrooms" className="block rounded-lg dark:text-white my-2">Bathrooms</label>
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
        <label htmlFor="sqft" className="block rounded-lg dark:text-white my-2">Sqft</label>
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
      <div className='flex justify-between my-3'>
        <button type="submit" className="w-full bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-800  ease-in duration-300 hover:shadow-md text-white">Search</button>
      </div> 
    </form>
  </aside>

      <div className="p-4 md:ml-64">
        <div className="p-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

              {/* {listings.map((listing) =>

              
                  <List 
                    title={listing.title}
                    address={listing.address}
                    city={listing.city}
                    province={listing.province}
                    price={listing.price}
                    sale_type={listing.sale_type}
                    home_type={listing.home_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    photo_main={listing.photo_main}
                  />
     
                )} */}

            {listings.results?.map((listing) =>
            <div key={listing.id}>
             <List 
              id={listing.id}
              title={listing.title}
              address={listing.address}
              city={listing.city}
              province={listing.province}
              price={listing.price}
              sale_type={listing.sale_type}
              home_type={listing.home_type}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              sqft={listing.sqft}
              photo_main={listing.photo_main}
             />
             </div>
            )}
              
            </div>
        </div>
      </div>
      <div className='fixed bottom-[-32px] w-full'>
        <button onClick={() => setNav(!nav)} className='md:hidden my-8 w-full px-5 py-2 bg-purple-600 text-white text-sm font-bold tracking-wide focus:outline-none'>Filters</button>
      </div>
  </div>
  )
}

export default Listings