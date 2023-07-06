import { useState } from 'react'
import Hero from '../components/Hero'
// import MiddleSection from '../components/MiddleSection'
import List from '../components/List'

const Home = ({onSubmit, onChange, sale_type, province, price, bedrooms, home_type, bathrooms, sqft, listings}) => {

  return (
    <>
    <Hero 
      onSubmit={onSubmit}
      onChange={onChange}
      sale_type={sale_type}
      province={province}
      price={price}
      bedrooms={bedrooms}
      home_type={home_type}
      bathrooms={bathrooms}
      sqft={sqft}
    />
    {/* <MiddleSection /> */}

    <div className="bg-white">
        <div className="w-[75%] mx-auto py-3 gap-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

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

    </>
  )
}

export default Home