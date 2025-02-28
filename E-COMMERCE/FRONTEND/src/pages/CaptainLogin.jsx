import React from 'react'
import uberImage from '../assets/Gemini_Generated_Image_8g530h8g530h8g53_prev_ui (1).png';
import { Link } from 'react-router-dom';  
import { useState } from 'react';
import { useEffect } from 'react';


const CaptainLogin = () => {

  const [captainData, setCaptainData] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    });
    
    setEmail('');
    setPassword('');
  };
  
  useEffect(() => {
    console.log(captainData); // Logs updated captainData
  }, [captainData]);

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src={uberImage} alt="GoSure" className=' bg-auto  w-35  '/>
        <form onSubmit= {(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
          <input 
            required type="email" placeholder='eamil@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded mb-7 py-2 px-4 w-full text-lg placeholder:text-base'
          />
          <h3 className='text-lg font-medium mb-2'>What's our Captain's password</h3>
          <input 
            required type="password" placeholder='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded mb-7 py-2 px-4 w-full text-lg placeholder:text-base'
          />
          <button 
              className='text-lg bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full rounded mt-5'
              >
              Login
          </button>
        </form>

        <p className='text-center'>New here ? <Link to='/captain-signup' className='text-blue-700'>Register as Captain</Link></p>

      </div>

      <div>
        <Link to='login' className='flex justify-center items-center text-lg bg-[#7d500d] text-white font-semibold mb-4 px-4 py-2 w-full rounded mt-5'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
