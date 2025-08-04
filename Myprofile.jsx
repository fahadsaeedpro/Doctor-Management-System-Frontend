import React, { useState } from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'


const Myprofile = () => {




  const [userData, setUserData] = useState({



    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "fahad@gmail.com",
    phone: "03056656573",
    adress: {
      line1: "House 145",
      line: "196",

    },
    gender: "male",
    dob: "22-09-1999"
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(pre => ({ ...pre, name: e.target.value }))} />
          :
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500  underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(pre => ({ ...pre, phone: e.target.value }))} />
              :
              <p className='text-blue-400'>{userData.phone}</p>
          }



          <p className='font-medium'>Address:</p>
          {
            isEdit ? (
              <>
                <input className='bg-gray-50'
                  type="text"
                  value={userData.adress.line1}
                  onChange={(e) =>
                    setUserData(prev => ({
                      ...prev,
                      adress: {
                        ...prev.adress,
                        line1: e.target.value
                      }
                    }))
                  }
                />
                <br />
                <input className='bg-gray-50'
                  type="text"
                  value={userData.adress.line}
                  onChange={(e) =>
                    setUserData(prev => ({
                      ...prev,
                      adress: {
                        ...prev.adress,
                        line: e.target.value
                      }
                    }))
                  }
                />
              </>
            ) : (
              <p className='text-gray-500'>
                {userData.adress.line1}
                <br />
                {userData.adress.line}
              </p>
            )
          }

        </div>

      </div>
      <div>
        <p className='text-neutral-500  underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700' >
          <p className='font-medium'>Gender:</p>
          {
            isEdit
            ?
            <select className='max-w-20 bg-gray-100' value={userData.gender} onChange={e => setUserData(pre => ({ ...pre, gender: e.target.value }))}>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>

            </select>
              :
              <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit ?
            <input className='max-w-28 bg-gray-100'  type='date' value={userData.dob} onChange={e => setUserData(pre => ({ ...pre, dob: e.target.value }))}/>

            : 
            <p className='text-gray-400'>
            {userData.dob}
            </p>
          }

        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
          ?
          <button className='border border-e-indigo-500 px-8 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save Information</button>
          :
          <button className='border border-e-indigo-500 px-8 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default Myprofile