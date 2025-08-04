import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Myprofile from './Pages/Myprofile'
import Myappointment from './Pages/Myappointment'
import Appointment from './Pages/Appointment'
import About from './Pages/About'
import Navbar from './Components/navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

           <Navbar/>      
      {/* this route will mount our pages to this app file */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/Doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/About' element={<About />} />


        <Route path='/Contact' element={<Contact />} />
        <Route path='/My-profile' element={<Myprofile />} />
        <Route path='/My-Appointments' element={<Myappointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />










      </Routes>
<Footer/>
    </div>
  )
}

export default App