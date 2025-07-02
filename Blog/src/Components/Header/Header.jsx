import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UserContext from '../useContext/userContext'
import { useContext } from 'react'

function Header() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const login = () => {
    console.log('Button clicked')
    navigate('/login')
  }
  const signup = () => {
    console.log('Button clicked')
    navigate('/signup')
  }
  const logout = () => {
    localStorage.clear()
    setUser('')
    navigate('/')
  }
  const handleSettings = () => {
    setOpen(!open)
  }
  return (
    <div className='flex items-center shadow-lg px-6'>
      <div>
        <img src='Logo.png' alt='MyBlog' className='w-[130px] h-[30px]' />
      </div>
      <div className='flex mx-auto gap-8 text-xl p-3'>
        <li
          className='list-none cursor-pointer hover:text-blue-700'
        ><NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-600 ' : ''
          }
          to=''>
            Home
          </NavLink>
        </li>
        <li
          className='list-none cursor-pointer hover:text-blue-700 '
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-600 ' : ''
            }
            to='categories'>
            Catagories
          </NavLink>
        </li>
        <li
          className='list-none cursor-pointer hover:text-blue-700 '
        ><NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-600 ' : ''
          }
          to='contents'>
            Blogs
          </NavLink>
        </li>
        <li
          className='list-none cursor-pointer hover:text-blue-700 '
        ><NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-600 ' : ''
          }
          to='About'>
            About US
          </NavLink>
        </li>
      </div>
      {(!user) ? <div><div className='flex gap-2'>
        <button
          className='bg-blue-600 px-4 py-1 rounded font-sans text-white hover:text-blue-700 cursor-pointer'
          onClick={login}>
          Login
        </button>
        <button
          className='bg-blue-600 px-4 py-1 rounded font-sans text-white hover:text-blue-700 cursor-pointer'
          onClick={signup}>
          SignUp
        </button></div>
      </div> :
        <div className='relative group'>
          <div className='flex gap-3'>
            <button onClick={handleSettings} className='cursor-pointer hover:underline'>
              Settings<span className='text-[10px] ml-1'>▼</span>
            </button>
            <img
              src={`http://localhost:8000${user?.img}`}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          {open && (<div onMouseLeave={handleSettings} className='absolute right-4 bg-white border-black border-1 p-2 text-[12px] font-semibold space-y-1 '>
            <p className='cursor-pointer hover:text-orange-400' >Update profile</p>
            <hr />
            <p onClick={logout} className='cursor-pointer hover:text-orange-400'>Logout</p>
          </div>)}
        </div>
      }
    </div>
  )
}

export default Header