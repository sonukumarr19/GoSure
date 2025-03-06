import React from 'react'
import passengercar from '../assets/passenger-car.webp'

const LookingForDriver = (props) => {
  return (
    <div>
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0'
                onClick={()=>{
                    props.setvehicleFound(false);
                }}><i className="text-4xl pt-10 ri-arrow-down-wide-line"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Looking for nearby drivers</h3>
        
                <div className='flex justify-between flex-col items-center gap-2'>
                    <img className='h-20' src={passengercar} alt="Car" />
        
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
                </div>
            </div>
    </div>
  )
}

export default LookingForDriver
