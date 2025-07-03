import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../useContext/userContext'
import { useNavigate } from 'react-router'

function Catagories() {
    const [category, setCatagory] = useState(null)
    const { setTvalue } = useContext(UserContext)
    const navigate=useNavigate()
    useEffect(() => {
        async function catagoriesData() {
            const res = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
            const data = await res.json()
            console.log(data['blogs'])
            setCatagory(data['blogs'])
        }
        catagoriesData()
    }, [])
    const slug=(text)=>(
        text.replaceAll(' ','-')
    )
    const handleSubmit = (value) => {
        for (let i of category) {
           if (i['title']==value){
            setTvalue(i)
           }
        }
       
        const Slug=slug(value)
        navigate(`details/${Slug}`)
    }
    return (
        <div>
            {category ? (category.map((v) => (

                <div key={v.title} className='flex mt-5 px-10 h-[200px] space-y-5 cursor-pointer' onClick={() => handleSubmit(v.title)}>
                    <div className='mr-2'>
                        <img className='object-fill h-[200px] w-[500px]  shadow-lg' src={v.photo_url} />

                    </div>
                    <div className=' p-3 w-full shadow-lg text-[30px] font-semibold font-serif space-y-2'>
                        <p className=''>Category: {v.category}</p>
                        <p>Title: {v.title}</p>
                    </div>
                </div>
            ))) :
                (<div className='w-full mt-20 mb-112'>
                    <p className=' text-center text-6xl'>Loading blogs
                        <span className="text-center text-6xl font-semibold animate-pulse">.</span>
                        <span className="text-center text-6xl font-semibold animate-pulse">.</span>
                        <span className="text-center text-6xl font-semibold animate-pulse">.</span>
                    </p>
                </div>)
            }

        </div>
    )
}

export default Catagories