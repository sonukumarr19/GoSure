import React from 'react'
import uberImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
//import { useState } from 'react';




const UserSignup = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userData , setUserData] = React.useState({});


  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    //console.log(userData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');    
  }

  useEffect(() => {
        console.log(userData); // Logs updated captainData
      }, [userData]);

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src={uberImage} alt="GoSure" className=' bg-auto  w-35  '/>
        <form onSubmit= {(e) => submitHandler(e)}>

          <h3 className='text-base font-medium mb-2'>Enter your name</h3>
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


          <h3 className='text-base font-medium mb-2'>Enter your email</h3>
          <input 
            required type="email" placeholder='eamil@example.com'
            className='bg-[#eeeeee] rounded mb-5 py-2 px-4 w-full text-base placeholder:text-sm'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className='text-base font-medium mb-2'>Enter your password</h3>
          <input 
            required type="password" placeholder='password' 
            className='bg-[#eeeeee] rounded mb-5 py-2 px-4 w-full text-base placeholder:text-sm'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
              className='text-lg bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full rounded mt-5'
              >
              Sign up
          </button>
        </form>

        <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-700'>Login here</Link></p>

      </div>

      <div>
        <p className='text-[10px]'>By proceeding, you consent to get calls , Whatsapp or SMS 
          messages including by automated dialing systems from GoSure and its partners.
          You agree to GoSure's <span className='text-blue-700'>Terms of Service</span> and <span className='text-blue-700'>Privacy Policy</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup
