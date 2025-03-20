import React from 'react'
import passengercar from '../assets/passenger-car.webp'
// import auto from '../assets/auto.webp'
// import moto from '../assets/moto.webp'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'
        onClick={()=>{
            props.setConfirmRidePanel(false);
        }}><i className="text-4xl pt-10 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>

        <div className='flex justify-between flex-col items-center gap-2'>
            <img className='h-20' src={passengercar} alt="Car" />

            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="text-lg ri-bank-card-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>{
                props.setvehicleFound(true);
                props.setConfirmRidePanel(false);
                props.createRide();
            }} className='w-full bg-green-600 text-white font-semibold p-2 mt-5 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide
