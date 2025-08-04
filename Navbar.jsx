import React, { useState } from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setshowMenu] = useState(false)
    const [token, seToken] = useState(true)
    return (
        <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => { navigate('/') }} className='w-44 cursor-pointer' src={assets.logo} alt="" />

            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to={'/'}>
                    <li className='py-2'>
                        Home
                    </li>
                    <hr className='border-none outline-none h-0.5 w-3/ bg-purple-500  m-auto hidden ' />
                </NavLink>
                <NavLink to={'/Doctors'}>
                    <li className='py-2'>
                        All Doctors
                    </li>
                    <hr className='border-none outline-none h-0.5 w-3/5 bg-purple-500 m-auto hidden ' />

                </NavLink>
                <NavLink to={'/About'}>
                    <li className='py-2'>
                        About
                    </li>
                    <hr className='border-none outline-none h-0.5 w-3/5 bg-purple-500 m-auto hidden ' />
                </NavLink>
                <NavLink to={'/Contact'}>
                    <li className='py-2'>
                        Contact
                    </li>
                    <hr className='border-none outline-none h-0.5 w-3/5 bg-purple-500 m-auto hidden ' />
                </NavLink>


            </ul>
            <div className='flex item-center gap-4'>
                {
                    token ?
                        <div className='flex item-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                    <p onClick={() => seToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        :
                        <button onClick={() => navigate('/login')} className='bg-purple-500  text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button>

                }
                <img onClick={() => setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                {/* ...mobile menu */}

                <div className={` ${showMenu ? 'fixed w-full' : 'w-0 h-0 '} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setshowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>

                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Navbar