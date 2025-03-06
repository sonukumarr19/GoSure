import React from 'react'
import user from '../assets/user.jpg'

const RidePopUp = (props) => {

  return (
    <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0'
            onClick={()=>{
                props.setridePopUpPanel(false);
            }}><i className="text-4xl pt-10 text-gray-600 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>A New Ride Available !</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-15 w-15 rounded-full object-cover ' src={user} alt="Rider" />
                    <h2 className='text-xl font-semibold'>Harshita Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
    
            <div className='flex justify-between flex-col items-center gap-2'>
    
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab Rourkela</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab Rourkela</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-bank-card-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <button onClick={()=>{
                        props.setridePopUpPanel(false);
                    }} className=' bg-gray-300 text-gray-800 font-semibold p-2 px-14 rounded-lg'>Ignore</button>
                    
                    <button onClick={()=>{
                        props.setConfirmRidePopUpPanel(true);
                    }} className=' bg-green-600 text-white font-semibold p-2 px-14 rounded-lg'>Accept</button>
                </div>
            </div>
        </div>
  )
}

export default RidePopUp
