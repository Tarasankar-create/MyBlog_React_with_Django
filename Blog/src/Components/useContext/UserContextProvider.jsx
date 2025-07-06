import React, { useEffect } from 'react'
import UserContext from './userContext'
import { useState } from 'react'

function UserContextProvider({children}) {
    const[user,setUser]=useState(null)
    const[tvalue,setTvalue]=useState(null)
    const stored_value=localStorage.getItem('name')
    useEffect(()=>{
      
      if(stored_value){
        const values={
        'name':localStorage.getItem('name'),
        'email':localStorage.getItem('email'),
        'mob':localStorage.getItem('mob'),
        'gender':localStorage.getItem('gender'),
        'image':localStorage.getItem('image'),
      }
      setUser(values)
      }
    },[stored_value])
  return (
   <UserContext.Provider value={{user,setUser,tvalue,setTvalue}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider