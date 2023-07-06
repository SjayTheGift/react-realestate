import React from 'react'
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { BiBed } from 'react-icons/bi';
import { MdOutlineBathtub } from 'react-icons/md';
import { Link } from 'react-router-dom';

import house from '../assets/img/Crop.jpg';

const List = ({id, title, address, city, province, price, sale_type, home_type, bedrooms, bathrooms, sqft, photo_main }) => {
  // title, address, city, province, price, sale_type, home_type, bedrooms, bathrooms, sqft, photo_main

  return (
    <>
    <div className='shadow-md hover:shadow-2xl'>
      <Link to={`/details/${id}`} className="max-w-sm shadow-md rounded-lg py-5">
        <img src={photo_main} alt="Shoes" className='rounded-t-lg w-[100%]'/>
        <div className="card-body text-left py-3 px-3">
            <h2 className="font-bold text-xl">{title} | {sqft} sq.m</h2>
            <p className='text-gray-500 my-2'>{address}, {city}, {province}</p>
            <p className='flex items-center'><LiaMoneyBillWaveSolid className='mr-2'/> R{price}</p>
            <div className="card-actions justify-end mt-2 ">
                <hr />
                <div className='flex justify-around item-center mt-5'>
                    <span className='flex items-center'><p className='mr-1'>{bedrooms}</p> <BiBed size={20}/></span>
                    <span className='flex items-center'><p className='mr-1'>{bathrooms}</p> <MdOutlineBathtub size={20}/></span>
                </div>
            </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default List
