import React from 'react'
import uberImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { useState } from 'react';
//import { useEffect } from 'react';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 

  const [vehicleColor, setVehicleColor] = React.useState('');
  const [vehiclePlate, setVehiclePlate] = React.useState('');
  const [vehicleCapacity, setVehicleCapacity] = React.useState('');
  const [vehicleType, setVehicleType] = React.useState('');

  const {captain , setCaptain} = React.useContext(CaptainDataContext);

  const submitHandler =async (e) => {
    e.preventDefault();

    const captainData = {
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    //console.log(userData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword(''); 
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');   
  }

  // useEffect(() => {
  //       console.log(userData); // Logs updated captainData
  //     }, [userData]);


  return (
    <div>
        <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img src={uberImage} alt="GoSure" className=' bg-auto  w-35  '/>
          <form onSubmit= {(e) => submitHandler(e)}>

            <h3 className='text-base font-medium mb-2'>Enter Captain's name</h3>
            <div className='flex gap-3 mb-5'>
              <input
                required type="text" placeholder='First Name' 
                className='bg-[#eeeeee] rounded  py-2 px-4 w-1/2 text-base placeholder:text-sm'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text" placeholder='Last Name' 
                className='bg-[#eeeeee] rounded  py-2 px-4 w-1/2 text-base placeholder:text-sm'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>


            <h3 className='text-base font-medium mb-2'>Enter Captain's email</h3>
            <input 
              required type="email" placeholder='email@example.com'
              className='bg-[#eeeeee] rounded mb-5 py-2 px-4 w-full text-base placeholder:text-sm'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className='text-base font-medium mb-2'>Enter password</h3>
            <input 
              required type="password" placeholder='password' 
              className='bg-[#eeeeee] rounded mb-5 py-2 px-4 w-full text-base placeholder:text-sm'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className='text-base font-medium mb-2'>Enter Vehicle Details</h3>
            <div className='flex gap-3 mb-5'>
              <input
                required type="text" placeholder='Vehicle Color' 
                className='bg-[#eeeeee] rounded py-2 px-4 w-1/2 text-base placeholder:text-sm'
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                required type="text" placeholder='Vehicle Plate' 
                className='bg-[#eeeeee] rounded py-2 px-4 w-1/2 text-base placeholder:text-sm'
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className='flex gap-3 mb-5'>
              <input
                required type="number" placeholder='Vehicle Capacity' 
                className='bg-[#eeeeee] rounded py-2 px-4 w-1/2 text-base placeholder:text-sm'
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                required className='bg-[#eeeeee] rounded py-2 px-4 w-1/2 text-base placeholder:text-sm'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorbike">Motorbike</option>
              </select>
            </div>
            <button 
                className='text-lg bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full rounded mt-5'
                >
                Create Caption Account
            </button>
          </form>

          <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-700'>Login here</Link></p>

        </div>

        <div>
          <p className='text-[10px]'>This site is protected by reCAPTCHA and Google<span className='text-black underline font-semibold'> Privacy Policy </span>and <span className='text-black underline font-semibold'> Terms of Service  </span>apply.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CaptainSignup
