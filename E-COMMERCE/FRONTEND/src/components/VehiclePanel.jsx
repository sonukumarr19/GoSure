import React from 'react'
import passengercar from '../assets/passenger-car.webp'
import auto from '../assets/auto.webp'
import moto from '../assets/moto.webp'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'
        onClick={()=>{
          props.setVehiclePanel(false);
        }}><i className="text-4xl pt-10 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-3'>Choose a vehicle </h3>
          <div onClick={()=>{
            props.setConfirmRidePanel(true);
          }} className='flex items-center justify-between p-3 w-full border-2  border-gray-300 active:border-black mb-2  rounded-xl'>
            <img className='h-12 pr-3' src={passengercar} alt="Car" />
            <div className=' w-1/2'> 
              <h4 className='font-medium text-base'>GoSure Go <span><i class="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-700'>Affordable, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹193.20</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmRidePanel(true);
          }} className='flex items-center justify-between p-3 w-full border-2 border-gray-300 active:border-black  mb-2  rounded-xl'>
            <img className='h-16 pr-3' src={auto} alt="Car" />
            <div className=' w-1/2'> 
              <h4 className='font-medium text-base'>Auto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-700'>Affordable, auto rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹118.60</h2>
          </div>

          {/* <div className=' flex items-center justify-between p-3 w-full  mb-2 border-gray-300 active:border-black border-2 rounded-xl'> */}
          <div onClick={()=>{
            props.setConfirmRidePanel(true);
          }} className='flex items-center justify-between p-3 w-full border-2 rounded-xl mb-2 border-gray-300 active:border-black cursor-pointer'>
            <img className='h-16 pr-3' src={moto} alt="Car" />
            <div className=' w-1/2'> 
              <h4 className='font-medium text-base'>Moto <span><i class="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-700'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹65.00</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
