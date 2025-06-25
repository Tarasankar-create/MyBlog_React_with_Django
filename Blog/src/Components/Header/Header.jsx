import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UserContext from '../useContext/userContext'
import { useContext } from 'react'

function Header() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const name = localStorage.getItem('name')
  const login = () => {
    console.log('Button clicked')
    navigate('/login')
  }
  const signup = () => {
    console.log('Button clicked')
    navigate('/signup')
  }
  const logout = () => {
    localStorage.removeItem('name')
  }
  return (
    <div className='flex items-center shadow-lg px-6'>
      <div>
        <img src='Logo.png' alt='MyBlog' className='w-[130px] h-[30px]' />
      </div>
      <div className='flex mx-auto gap-8 text-xl p-3'>
        <li
          className='list-none cursor-pointer hover:text-blue-700'
        ><Link to=''>
            Home
          </Link>
        </li>
        <li
          className='list-none cursor-pointer hover:text-blue-700 '
        >
          <Link to='content'>
            Content
          </Link>
        </li>
        <li
          className='list-none cursor-pointer hover:text-blue-700 '
        ><Link to='Features'>
            Features
          </Link>
        </li>
        <li
          className='list-none cursor-pointer hover:text-blue-700 '
        ><Link to='About'>
            About US
          </Link>
        </li>
      </div>
      {(!name) ? <div><div className='flex gap-2'>
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
        <div>
          <button onClick={logout}>
            Settings
          </button>
        </div>
      }
    </div>
  )
}

export default Header