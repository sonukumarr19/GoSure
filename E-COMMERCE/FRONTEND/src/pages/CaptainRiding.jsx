import React from 'react'
import map from '../assets/map.jpeg';
import GoSureImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useGSAP} from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const  finishRidePanelRef = useRef(null);


    useGSAP(()=>{
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])

  return (
    <div className='h-screen'>
        <div className='fixed top-0 p-6 w-screen flex items-center justify-between'>
            <img className='w-24 bg-auto' src={GoSureImage} alt="GoSure" />
            <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg ri-logout-box-r-line"></i>
            </Link>
        </div>

        <div className='h-4/5'>
            <img className='h-full w-full object-cover' src={map} alt="Car" />
        </div>

        <div className='h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative'
            onClick={()=>{
                setFinishRidePanel(true);
            }}
        >
            <h5 className='p-1 text-center w-[95%] mr-5 absolute top-0'
            onClick={()=>{
                
            }}><i className="text-4xl pt-10 text-gray-600 ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-2xl font-semibold'>4 KM away</h4>
            <button className=' bg-green-600 text-white font-semibold p-2 px-10 rounded-lg'>Complete Ride</button>
        </div>

        <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
              <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
    </div>
  )
}

export default CaptainRiding
