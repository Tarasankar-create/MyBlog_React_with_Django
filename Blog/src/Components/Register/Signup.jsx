import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mob, setMob] = useState()
  const [gender, setGender] = useState()
  const [pwd, setPwd] = useState()
  const [profile, setProfile] = useState()
  const [error, setError] = useState('')
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("http://127.0.0.1:8000/signup", { 'name': name, 'email': email, 'mob': mob, 'gender': gender,'pic':profile ,'pwd': pwd })
      if (res.status == 200) {
        navigate('/login')
        setError('')
      }
    } catch (err) {
      if(err){
        setError(error)
      }
      else{
        setError('Something went wrong')
      }
    }
  }

  return (
    <div className='bg-[rgba(7,7,7,0.1)] h-screen'>
      <header>
        <div className='flex justify-center shadow-lg py-2 bg-white'>
          <img src='Logo.png' />
        </div>
      </header>
      {error && <p className='text-center text-2xl text-red-600'>{error}r</p>}
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='w-2/5 bg-white text-center pt-2 font-semibold text-2xl underline'>SignUp</p>
        <form onSubmit={handleSubmit} className="w-2/5 bg-white p-5 space-y-4">
          <div className="flex items-center">
            <label className="w-24">Name:</label>
            <input
              type="text"
              className="flex-1 border-2 border-black p-1 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>

          <div className="flex items-center">
            <label className="w-24">Email:</label>
            <input
              type="email"
              className="flex-1 border-2 border-black p-1 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>

          <div className="flex items-center">
            <label className="w-24">Mob:</label>
            <input
              type="number"
              className="flex-1 border-2 border-black p-1 rounded"
              value={mob}
              onChange={(e) => setMob(e.target.value)}
              required />
          </div>

          <div className="flex items-center">
            <label className="w-24">Gender:</label>
            <select
              className="flex-1 border-2 border-black p-1 rounded"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required>
              <option value="">------</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-24">Profile:</label>
            <input
              type="file"
              className="flex-1 border-2 border-black p-1  rounded cursor-pointer"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              required />
          </div>

          <div className="flex items-center">
            <label className="w-24">Password:</label>
            <input
              type="password"
              className="flex-1 border-2 border-black p-1 rounded"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required />
          </div>

          <button className="block mx-auto bg-[#554fc9] px-3 py-1 text-white rounded text-xl font-mono cursor-pointer">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Signup