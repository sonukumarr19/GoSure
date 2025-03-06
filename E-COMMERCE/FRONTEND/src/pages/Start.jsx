import React from 'react'
import uberImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { Link } from 'react-router-dom';
import traffic from '../assets/trafficLight.avif'


const Start = () => {
  return (
    <div>
      <div className="bg-cover pt-5 h-screen flex justify-between w-full flex-col"
        style={{ backgroundImage: `url(${traffic})` }}>
      <img src={uberImage} alt="GoSure" className=' bg-auto  w-45'/>
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get Started with GoSure</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
