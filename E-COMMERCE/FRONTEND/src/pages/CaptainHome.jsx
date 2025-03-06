import React from 'react'
import { Link } from 'react-router-dom'
import map from '../assets/map.jpeg';
import GoSureImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useState } from 'react';
import {useGSAP} from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

    const [ridePopUpPanel, setridePopUpPanel] = useState(true);
    const  ridePanelRef = useRef(null);
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
    const  confirmRidePanelRef = useRef(null);


    useGSAP(()=>{
        if(ridePopUpPanel){
          gsap.to(ridePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(ridePanelRef.current, {
            transform: 'translateY(100%)' // Correct
          })
        }
      },[ridePopUpPanel])

      useGSAP(()=>{
        if(confirmRidePopUpPanel){
          gsap.to(confirmRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(confirmRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[confirmRidePopUpPanel])

  return (
    <div className='h-screen'>
        <div className='fixed top-0 p-6 w-screen flex items-center justify-between'>
            <img className='w-16 bg-auto' src={GoSureImage} alt="GoSure" />
            <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg ri-logout-box-r-line"></i>
            </Link>
        </div>

        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src={map} alt="Car" />
        </div>

        <div className='h-2/5 p-6'>
            <div>
                <CaptainDetails/>
            </div>
        </div>

        <div ref={ridePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
              <RidePopUp  setridePopUpPanel={setridePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
        </div>

        <div ref={confirmRidePanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
              <ConfirmRidePopUp  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setridePopUpPanel={setridePopUpPanel}/>
        </div>
    </div>
  )
}

export default CaptainHome
