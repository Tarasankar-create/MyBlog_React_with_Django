import React from 'react'
import UserContext from '../useContext/userContext'
import { useContext } from 'react'
function Details() {
    const {tvalue}=useContext(UserContext)
    console.log(tvalue)
  return (
    <>
    <div className=' border-2 border-amber-300 px-5 my-5 text-black'>
        <div className='flex border-0 border-black shadow-lg justify-between'>
          <p className='text-red-700 text-xl'>{tvalue['title'].toUpperCase()}</p>
          <p><span className='text-xl text-red-700'>Updated at : </span> {tvalue['updated_at'].split('T')[0]} {tvalue['updated_at'].split('T')[1].split('.')[0]}</p>
        </div>
        <div className='h-[200px] '>
          <img src={tvalue['photo_url']} alt='Loading...' className='w-[250px] h-[180px]'/>
          
        </div>
        <hr/>
        <div className='py-3'>
          Description : <p className='underline text-xl text-blue-600'>{tvalue['description'].toUpperCase()}</p>
          <p>{tvalue['content_text']}</p>
        </div>
     </div>
    </>
  )
}

export default Details