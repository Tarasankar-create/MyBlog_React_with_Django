import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const [value,setValue]=useState(null)
  useEffect(()=>{
    async function Data(){
      const res= await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
      const data=await res.json()
      setValue(data.blogs)
    }
    Data()
  },[])
  return (
    <>
    
    {(value)?value.map((v,i)=>(
      <div className=' border-2 border-amber-300 px-5 my-5 text-black'>
        <div className='flex border-0 border-black shadow-lg justify-between'>
          <p className='text-red-700 text-xl'>{v['title'].toUpperCase()}</p>
          <p><span className='text-xl text-red-700'>Updated at : </span> {v['updated_at']}</p>
        </div>
        <div className='h-[200px] '>
          <img src={v['photo_url']} alt='Loading...' className='w-[250px] h-[180px]'/>
          
        </div>
        <hr/>
        <div className='py-3'>
          Description : <p className='underline text-xl text-blue-600'>{v['description'].toUpperCase()}</p>
          <p>{v['content_text']}</p>
        </div>
     </div>

    )):
    (<div className='w-full mt-20'>
      <p className='text-[rgb(106,108,234)] text-center text-6xl'>Welcome to MyBlog</p>
    </div>
    )}
    </>
  )
}

export default App
