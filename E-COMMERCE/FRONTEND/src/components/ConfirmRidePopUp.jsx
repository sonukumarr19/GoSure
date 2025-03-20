import React, { useState } from 'react'
import user from '../assets/user.jpg'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState();
    const navigate = useNavigate()

    const submitHandler=async (e)=>{
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }
    }


  return (
    <div>
                <h5 className='p-1 text-center w-[93%] absolute top-0'
                onClick={()=>{
                    props.setRidePopupPanel(false);
                }}><i className="text-4xl pt-10 text-gray-600 ri-arrow-down-wide-line"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
    
                <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <img className='h-15 w-15 rounded-full object-cover ' src={user} alt="Rider" />
                        <h2 className='text-xl font-semibold capitalize'>{props.ride?.user.fullName.firstName + " " + props.ride?.user.fullName.lastName }</h2>
                    </div>
                    <h5 className='text-lg font-semibold'>2.2 KM</h5>
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
                    <div className='p-6 w-full'>
                        <form onSubmit={submitHandler}>
                            <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text"  placeholder='Enter Otp'className=' bg-[#eee] text-xl px-6 py-4 font-mono rounded-lg w-full mt-1'/>

                            <button className='w-full flex justify-center bg-green-600 text-white text-lg font-semibold p-3 mt-5 rounded-lg'>Confirm Ride</button>
    
                            <button onClick={()=>{
                                props.setConfirmRidePopupPanel(false);
                                props.setRidePopupPanel(false);
                            }} className='w-full bg-red-600 text-white text-lg font-semibold p-3 mt-2 rounded-lg'>Cancel Ride</button>
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default ConfirmRidePopUp
