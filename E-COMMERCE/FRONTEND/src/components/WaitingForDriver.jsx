import React from 'react'
import passengercar from '../assets/passenger-car.webp'

const WaitingForDriver = (props) => {
  return (
    <div>
      <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'
          onClick={() => {
            props.setwaitingForDriver(false);
          }}>
          <i className="text-4xl pt-10 ri-arrow-down-wide-line"></i>
        </h5>

        <div className='flex items-center justify-between'>
          <img className='h-12' src={passengercar} alt="Car" />
          <div className='text-right'>
            <h2 className='text-lg font-medium capitalize'>
              {props.ride?.captain?.fullName?.firstName + " " + props.ride?.captain?.fullName?.lastName}
            </h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.vehicle?.plate}</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            <h1 className='text-lg font-semibold'>{props.ride?.otp}</h1>
          </div>
        </div>

        <div className='flex justify-between flex-col items-center gap-2'>

          <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
              <i className="text-lg ri-bank-card-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver