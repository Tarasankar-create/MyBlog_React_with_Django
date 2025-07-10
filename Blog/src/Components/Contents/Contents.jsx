import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Contents() {
  const [blog, setBlog] = useState(null)
  const [email, setEmail] = useState()
  const [error, setError] = useState('')
  const[open,setOpen]=useState('')
  const navigate=useNavigate()
  useEffect(() => {
    const userEmail = localStorage.getItem('email')
    setEmail(userEmail)
  }, [])
  useEffect(() => {
    if(email){
    const blogData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/show_blog', { params: { 'email': email } })
        console.log(res.data)
        if (res.status == 200) {
          setBlog(res.data)
          setError('')
        }
        else {
          setError(res.error)
        }
      }
      catch (error) {
        setError(error.message)
      }
    }
    blogData()
    }
  }, [email])

  function editMenu(title){
    setOpen(title)
  }
  function hideMenu(){
    setOpen('')
  }

  function editContent(title){
    const splitTitle=title.split(' ')
    localStorage.setItem('blogtitle',title)
    if (splitTitle.length >1){
      const slugTitle=splitTitle.join('-')
      navigate(`editcontents/${slugTitle}`)
    }
    navigate(`editcontents/${splitTitle}`)
  }

  async function deleteBlog(title){
        const res = await axios.get('http://127.0.0.1:8000/del_blog', { params: { 'title':title } })
        if (res.status == 200) {
          console.log(res.data)
          setError('')
          navigate('/')
        }
        else {
          setError(res.error)
        }
  }

  return (
    <div className='p-5'>
      {error && <p className='text-center text-2xl text-red-600'>{error}</p>}
      {(blog) ? blog.map((v, i) => (
        <div key={v['title']} className='relative p-6 border-1 border-black mt-5'>
          <div className='flex justify-end'>
          <p onClick={()=>editMenu(v['title'])} className='text-[22px] hover:text-orange-400 cursor-pointer'>︙</p>
          </div>
          <div onMouseLeave={hideMenu} className={`absolute w-[70px] font-semibold right-3 bg-white py-2 px-2 border-1 border-black shadow-lg ${(open==v['title'])?'visible':'hidden'}`}>
            <p onClick={()=>editContent(v['title'])} className='hover:text-orange-400 cursor-pointer'>Edit</p>
            <hr/>
            <p onClick={()=>deleteBlog(v['title'])} className='hover:text-orange-400 cursor-pointer'>Delete</p>
          </div>
        <div  className=' border-2 border-amber-300 px-5 my-5 text-black'>
          <div className='flex border-0 border-black shadow-lg justify-between'>
            <p className='text-red-700 text-xl'>{v['title'].toUpperCase()}</p>
            <p><span className='text-xl text-red-700'>Updated at : </span> {v['date'].split('T')[0]} {v['date'].split('T')[1].split('Z')[0]}</p>
          </div>
          <div className='h-[200px] '>
            <img src={`http://127.0.0.1:8000${v['image']}`} alt='Loading...' className='w-[250px] h-[180px]' />
          </div>
          <hr />
          <div className='py-3'>
            Description : <p className='underline text-xl text-blue-600'>{v['desctitle'].toUpperCase()}</p>
            <p>{v['description']}</p>
          </div>
        </div>
        </div>

      )) :
        (<div className='w-full mt-20 mb-112'>
          <p className='text-[rgb(35,35,35)] text-center font-mono text-6xl'>Please login to view your blogs</p>
        </div>
        )}
    </div>
  )
}

export default Contents