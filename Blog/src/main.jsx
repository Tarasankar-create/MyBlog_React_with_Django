import { createRoot } from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
import './index.css'
import Layout from './Layout.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import App from './App.jsx'
import Catagories from './Components/Catagories/Catagories.jsx'
import Contents from './Components/Contents/Contents.jsx'
import About from './Components/About/About.jsx'
import Signup from './Components/Register/Signup.jsx'
import Login from './Components/Register/Login.jsx'
import UserContextProvider from './Components/useContext/UserContextProvider.jsx'
import Details from './Components/Details/Details.jsx'
import Update from './Components/Register/Update.jsx'
import AddContent from './Components/Contents/AddContent.jsx'
import EditContents from './Components/Contents/EditContents.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<App />} />
        <Route path='categories' element={<Catagories />} />
        <Route path='categories/details/:slug' element={<Details />} />
        <Route path='contents' element={<Contents />} />
        <Route path='contents/editcontents/:slug' element={<EditContents />} />
        <Route path='about' element={<About />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/update' element={<Update />} />
      <Route path='/add_blog' element={<AddContent />} />
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
