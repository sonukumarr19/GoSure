import React from 'react'
import driver from '../assets/driver.jpeg'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

    const {captain} = useContext(CaptainDataContext);
    if (!captain) return <p>Loading...</p>;
    console.log(captain);

  return (
    <div>
        <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src={driver} alt="" />
                    <h4 className='text-lg font-medium capitalize'>{captain?.fullName?.firstName ?? 'Loading'} {captain?.fullName?.lastName ?? '...'}</h4>
                </div>
                <div>
                    <h4 className='text-xl font-medium'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex justify-center p-4 mt-8 bg-gray-100 rounded-xl gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>

                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>

                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
    </div>
  )
}

export default CaptainDetails;
