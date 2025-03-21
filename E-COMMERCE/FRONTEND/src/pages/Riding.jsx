import React from 'react'
// import map from '../assets/map.jpeg';
import passengercar from '../assets/passenger-car.webp'
import {Link , useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking' 
import GoSureImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png'

const Riding = () => {
    const location = useLocation();
    const {ride} = location.state || {}
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })



  return (
    <div className='h-screen'>
        <div className='fixed top-0 p-3 w-screen flex items-center justify-between'>
            <img className='w-24 bg-auto' src={GoSureImage} alt="GoSure" />
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg ri-home-4-fill"></i>
            </Link>
        </div>

        <div className='h-1/2 top-0 flex relative items-center justify-center -z-40 object-cover'>
            {/* <img className='h-full w-full object-' src={map} alt="Car" /> */}
            <LiveTracking/>
        </div>

        <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
                    <img className='h-12' src={passengercar} alt="Car" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullName.firstName + " " + ride?.captain.fullName.lastName}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
            </div>

            <div className='flex justify-between flex-col items-center gap-2'>
                
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{ride.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-bank-card-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className='w-full bg-green-600 text-white font-semibold p-2 mt-5 rounded-lg'>Make a Payment</button>

        </div>
    </div>
  )
}

export default Riding
