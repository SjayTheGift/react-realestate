import React from 'react'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'

import person1 from '../assets/img/01.webp';


const TeamCards = () => {
  return (
    <>
        <div className="max-w-sm shadow-xl rounded-lg py-5">
            <img src={person1} alt="Shoes" className='rounded-t-lg w-[100%]'/>
            <div className="card-body text-center py-3 px-3">
                <h2 className="font-semibold text-xl">John Doe</h2>
                <p className='text-gray-500 my-2'>Real Estate Agent</p>
                <div className="card-actions justify-end">
                 <ul className='flex justify-between w-40 mx-auto items-center text-center'>
                    <li><FiFacebook /></li>
                    <li><FiTwitter /></li>
                    <li><FiInstagram /></li>
                 </ul>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default TeamCards
