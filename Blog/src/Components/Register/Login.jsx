import React from 'react'
import { useState } from 'react'

function Login() {
    const[email,setEmail]=useState()
    const[pwd,setPwd]=useState()
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(email)
      console.log(typeof email)
      console.log(pwd)
      console.log(typeof pwd)
    }
  return (
    <div className='bg-[rgba(7,7,7,0.1)] h-screen'>
      <header>
        <div className='flex justify-center shadow-lg py-2 bg-white'>
          <img src='Logo.png' />
        </div>
      </header>
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='w-2/5 bg-white text-center pt-2 font-semibold text-2xl underline'>Login</p>
        <form onSubmit={handleSubmit} className="w-2/5 bg-white p-5 space-y-4">
          <div className="flex items-center">
            <label className="w-24">Email:</label>
            <input 
            type="email" 
            className="flex-1 border-2 border-black p-1 rounded" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
          </div>
          <div className="flex items-center">
            <label className="w-24">Password:</label>
            <input 
            type="password" 
            className="flex-1 border-2 border-black p-1 rounded" 
            value={pwd}
            onChange={(e)=>setPwd(e.target.value)}
            required/>
          </div>

          <button className="block mx-auto bg-[#554fc9] px-3 py-1 text-white rounded text-xl font-mono cursor-pointer">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login