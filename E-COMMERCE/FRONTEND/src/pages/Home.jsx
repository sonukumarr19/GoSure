import React from 'react'
import GoSureImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import map from '../assets/map.jpeg';
import { useState } from 'react';
import {useGSAP} from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import SearchLocationPanel from '../components/SearchLocationPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
  const [pickup , setPickup] = useState('');
  const [destination , setDestination] = useState('');
  const [panelOpen , setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanel , setVehiclePanel] = useState(null);
  const [confirmRide , setConfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const [vehicleFound , setvehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForDriver , setwaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Searching for a trip");
  }

  useGSAP(() => {
    gsap.to(panelRef.current, {
      duration: 0.3,
      ease: 'power2.out',
      opacity: panelOpen ? 1 : 0,
      height: panelOpen ? '70%' : '0%',
      display: panelOpen ? 'block' : 'none',
      padding: panelOpen ? 24 : 0
    });
  }, [panelOpen]);

  useGSAP(() => {
    gsap.to(panelCloseRef.current, {
      duration: 0.3,
      ease: 'power2.out',
      opacity: panelOpen ? 1 : 0,
    });
  }, [panelOpen]);

  useGSAP(()=>{
      if(confirmRide){
        gsap.to(confirmRideRef.current,{
          transform:'translateY(0)'
        })
      }else{
        gsap.to(confirmRideRef.current,{
          transform:'translateY(100%)'
        })
      }
  },[confirmRide])

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
},[vehiclePanel])

useGSAP(()=>{
  if(vehicleFound){
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
},[vehicleFound])


useGSAP(()=>{
  if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
},[waitingForDriver])



  return (
    <div className='relative h-screen overflow-hidden'> 
      <img className=' bg-auto  w-35 absolute top-5'  src={GoSureImage} alt="GoSure" />
      <div>
        <img className='h-screen w-screen object-cover' src={map} alt="" />
      </div>
      <div className='absolute w-full h-screen flex flex-col justify-end top-0 rounded-t-3xl'>

        <div className='h-[30%] p-6 bg-white relative'>

          <h5 ref={panelCloseRef} className='absolute text-3xl top-6 right-6'
            onClick={()=> setPanelOpen(false)}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className='text-3xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e) =>{ submitHandler(e)}}>
            <div className="line absolute left-10 h-16 w-1 top-[50%] bg-gray-900 rounded-full"></div>
            <input className='bg-[#eee] rounded-md px-12 py-2 text-lg w-full mt-5 '
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text" 
              placeholder='Enter a Pick-up location' />
            <input className='bg-[#eee] rounded-md px-12 py-2 text-lg w-full mt-3 mb-4 ' 
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text" 
              placeholder='Enter your Destination' />
          </form>
        </div>

        <div ref={panelRef} className='bg-white h-0'>
                <SearchLocationPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 px-3 py-10 pt-12 translate-y-full bg-white w-full'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRideRef} className='fixed z-10 bottom-0 px-3 py-6 pt-12 translate-y-full bg-white w-full'>
          <ConfirmRide setConfirmRidePanel ={setConfirmRidePanel} setvehicleFound={setvehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 px-3 py-6 pt-12 translate-y-full bg-white w-full'>
              <LookingForDriver setvehicleFound={setvehicleFound}/>
      </div>

      <div ref={waitingForDriverRef}  className='fixed z-10 bottom-0 px-3 py-6 pt-12 translate-y-full  bg-white w-full'>
              <WaitingForDriver setwaitingForDriver={setwaitingForDriver}/>
      </div>
              
    </div>
  )
}

export default Home
