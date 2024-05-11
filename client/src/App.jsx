import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route  path='/' element={<Home/>}/>
           <Route  path='/sign-in' element={<Signin/>}/>
           <Route  path='/sign-up' element={<SignUp/>}/>
           <Route  path='/sign-up' element={<SignUp/>}/>
           <Route  path='/dashboard' element={<Dashboard/>}/>
           <Route  path='/projects' element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App