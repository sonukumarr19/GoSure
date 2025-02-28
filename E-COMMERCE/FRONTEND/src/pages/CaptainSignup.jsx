
import React from 'react'
import uberImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
//import { useEffect } from 'react';

const CaptainSignup = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [ , setUserData] = React.useState({});

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
              required type="email" placeholder='eamil@example.com'
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
            <button 
                className='text-lg bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full rounded mt-5'
                >
                Sign up
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
