import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from '../useContext/userContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState()
  const [pwd, setPwd] = useState()
  const [error, setError] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://127.0.0.1:8000/register/login', { 'email': email, 'pwd': pwd })
      console.log(res)
      console.log(res.data['inf'])
      for (let i in res.data['inf']) {
        localStorage.setItem(i, `${res.data['inf'][i]}`)
      }
      const values = {
        'name': localStorage.getItem('name'),
        'email': localStorage.getItem('email'),
        'mob': localStorage.getItem('mob'),
        'gender': localStorage.getItem('gender'),
        'image': localStorage.getItem('img'),
      }
      setUser(values)
      navigate('/')
    } catch (err) {
      if (err.response && err.response.data) {
        const detail = err.response.data.detail || err.response.data.message || 'Login failed'
        setError(detail)
      } else {
        setError('Something went wrong. Please try again.')
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
      {error && <p className='text-center text-2xl text-red-600'>{error}</p>}
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='w-2/5 bg-white text-center pt-2 font-semibold text-2xl underline'>Login</p>
        <form onSubmit={handleSubmit} className="w-2/5 bg-white p-5 space-y-4">
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
            <label className="w-24">Password:</label>
            <input
              type="password"
              className="flex-1 border-2 border-black p-1 rounded"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required />
          </div>
          <NavLink to='/signup' className={'text-[13px] block text-center text-blue-700 underline hover:text-orange-500'}>Don't have an account | Register here</NavLink>
          <button className="block mx-auto bg-[#3f35fe] px-3 py-1 text-white rounded text-xl font-mono cursor-pointer">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login