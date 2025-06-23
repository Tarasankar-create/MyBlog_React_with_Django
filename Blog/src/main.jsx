import { createRoot } from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
import './index.css'
import Layout from './Layout.jsx'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import App from './App.jsx'
import Content from './Components/Content/Content.jsx'
import Features from './Components/Features/Feature.jsx'
import About from './Components/About/About.jsx'
import Signup from './Components/Register/Signup.jsx'
import Login from './Components/Register/Login.jsx'
import UserContextProvider from './Components/useContext/userContextProvider.jsx'

const route=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='Content' element={<Content/>}/>
      <Route path='Features' element={<Features/>}/>
      <Route path='About' element={<About/>}/>
    </Route>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    </>

  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <UserContextProvider>
    <RouterProvider router={route} />
    </UserContextProvider>
  </React.StrictMode>
)
