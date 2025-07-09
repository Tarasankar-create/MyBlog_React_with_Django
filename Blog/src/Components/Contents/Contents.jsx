import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Contents() {
  const[blog,setBlog]=useState(null)
  const[email,setEmail]=useState()
  useEffect(()=>{
    const userEmail=localStorage.getItem('email')
    setEmail(userEmail)
  },[])
  useEffect(()=>{
    const blogData=async()=>{
      const res= await axios.get('http://127.0.0.1:8000/show_blog',{'email':email})
     console.log(res.data)
      setBlog(res.data)
    }
    blogData()
  },[email])
  
  return (
    <>
    {(blog)?blog.map((v,i)=>(
      <div key={v['title']}  className=' border-2 border-amber-300 px-5 my-5 text-black'>
        <div className='flex border-0 border-black shadow-lg justify-between'>
          <p className='text-red-700 text-xl'>{v['title'].toUpperCase()}</p>
          <p><span className='text-xl text-red-700'>Updated at : </span> {v['date'].split('T')[0]} {v['date'].split('T')[1].split('Z')[0]}</p>
        </div>
        <div className='h-[200px] '>
          <img src={`http://127.0.0.1:8000${v['image']}`} alt='Loading...' className='w-[250px] h-[180px]'/>
          
        </div>
        <hr/>
        <div className='py-3'>
          Description : <p className='underline text-xl text-blue-600'>{v['desctitle'].toUpperCase()}</p>
          <p>{v['description']}</p>
        </div>
     </div>

    )):
    (<div className='w-full mt-20 mb-112'>
      <p className='text-[rgb(35,35,35)] text-center font-mono text-6xl'>Please login to view your blogs</p>
    </div>
    )}
    </>
  )
}

export default Contents