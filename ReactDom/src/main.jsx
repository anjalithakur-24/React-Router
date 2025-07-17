import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import './index.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />}/>
      <Route path='Login' element={<Login />}/>
      <Route path='SignUp' element={<SignUp />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>, 
)