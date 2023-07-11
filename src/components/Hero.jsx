import React from 'react'
import hero from '../assets/img/hero-image.webp';

import SearchHero from './SearchHero';

const Hero = ({onSubmit, onChange, city, sale_type, province, price, bedrooms, home_type, bathrooms, sqft, listings}) => {
  return (
    <div className='bg-white relative py-16'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center w-[75%] mx-auto py-3 gap-4 md:gap-0'>
        <div className=''>
          <h1 className='text-4xl md:text-6xl mb-4 font-semibold md:leading-tight'>Easy way to find a perfect property</h1>
          <p className='font-semibold text-gray-600'>We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder</p>
        </div>
        <div>
          <img src={hero} alt='hero image'/>
        </div>
      </div>
      <div>
        <SearchHero 
        onSubmit={onSubmit}
        onChange={onChange}
        city={city}
        sale_type={sale_type}
        province={province}
        price={price}
        bedrooms={bedrooms}
        home_type={home_type}
        bathrooms={bathrooms}
        sqft={sqft}
        listings={listings}
        />
      </div>

    </div>
  )
}

export default Hero
