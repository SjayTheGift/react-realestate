import { AiOutlineSafety, AiOutlineDollar }  from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold } from 'react-icons/pi'

import TeamCards from '../components/TeamCards'



import find from '../assets/img/find.svg'


const About = () => {
  return (
    <div className='bg-white h-screen'>
        <div className='w-[75%] mx-auto py-3 gap-4 md:gap-0'>
          <h2 className='font-semibold text-3xl text-center md:text-left'>Why choose us?</h2>
          <div className='flex flex-col text-center md:text-left md:flex-row mt-4 gap-5'>
            <div className='flex flex-col items-center md:items-start'>
              <AiOutlineSafety size={40} className='text-purple-600'/>
              <h3 className='text-1xl font-semibold my-3'>Safety is our priority</h3>
              <p>Vel et aliquet diam vulputate hendrerit lorem eget amet adipiscing. At ut ut consectetur in sed massa arcu risus sed.</p>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <AiOutlineDollar size={40} className='text-purple-600'/>
              <h3 className='text-1xl font-semibold my-3'>Fair price</h3>
              <p>Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies laoreet facilisis fusce amet, consequat neque.</p>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <BiSupport size={40} className='text-purple-600'/>
              <h3 className='text-1xl font-semibold my-3'>Support 24/7</h3>
              <p>Id velit, dui condimentum dictumst sapien quis a elementum dignissim. Dignissim ultrices scelerisque ultrices nisi.</p>
            </div>
          </div>

        
          <div className='grid md:grid-cols-2'>
            <div>
              <img src={find} />
            </div>
            <div>
              <h2 className='font-semibold text-3xl my-5'>How it works</h2>

                <div className='flex flex-row justify-between gap-4'>
                  <div>
                    <PiNumberCircleOneBold size={40} className='relative text-purple-600'/>
                  </div>
                  <div>
                    <h3 className='font-bold font-3xl my-2'>Choose your property</h3>
                    <p className=''>Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.</p>
                  </div>
                 
                </div>

                <div className='flex flex-row justify-between gap-4'>
                  <div>
                    <PiNumberCircleTwoBold size={40} className='relative text-purple-600'/>
                  </div>
                  <div>
                    <h3 className='font-bold font-3xl my-2'>See the property directly</h3>
                    <p className=''>Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.</p>
                  </div>
                 
                </div>

                <div className='flex flex-row justify-between gap-4'>
                  <div>
                    <PiNumberCircleThreeBold size={40} className='relative text-purple-600'/>
                  </div>
                  <div>
                    <h3 className='font-bold font-3xl my-2'>Easy payment</h3>
                    <p className=''>Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.</p>
                  </div>
                 
                </div>
            </div>

          </div>

          <div className='grid md:grid-cols-3 gap-5'>
            <TeamCards />
            <TeamCards />
            <TeamCards />
          </div>

        </div>
    </div>
  )
}

export default About