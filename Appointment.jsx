import React, { use, useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/Appcontext'
import { useState } from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'
import RelatedDoctor from '../Components/RelatedDoctor'


const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docslots, setDocslots] = useState([])
  const [slotIndex, setlotsIndex] = useState(0)
  const [slotTime, setslotTime] = useState('')




  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)


  }
  const getavailableslots = async => {
    setDocslots([])

    // getting current date 
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      //getting dat with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      //setting and time of date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // set hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)

      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeslots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hours: '2-digit', minute: '2-digit' })
        //add slots to array

        timeslots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocslots(prev => ([...prev, timeslots]))
    }
  }



  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])


  useEffect(() => {
    getavailableslots()
  }, [docInfo])

  useEffect(() => {
    console.log(docslots)

  }, [docslots])
  return docInfo && (
    <div >
      {/* doctors details  */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-indigo-600 w-full sm:mx-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7  bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* doc infor */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />

          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* doctor about  */}
          <div className='flex items-center gap-1 text-sm font-medium  text-gray-900 mt-3'>
            <p>About
              <img src={assets.info_icon} alt="" />
              <p className='text-sm text-gray-500  max-w-[700px] mt-1'>{docInfo.about}</p>
            </p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment fee:
            <span className='text-gray-600'>{currencySymbol} {docInfo.fees}</span>
          </p>
        </div>

      </div>
      {/* BOOKING SLOT */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docslots.length && docslots.map((item, index) => (
            <div onClick={() => setlotsIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-indigo-600 text-white' : 'border border-gray-200'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>


            </div>


          ))}
        </div>


        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docslots.length && docslots[slotIndex].map((item, index) => (
              <p onClick={()=>setslotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-indigo-500 text-white' : 'text-gray-400  border border-gray-300'} `} key={index}>
                {item.time.toLowerCase()}

              </p>
            ))
          }

        </div>
        <button className='bg-indigo-600 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
{/* mount listing doctors */}
<RelatedDoctor docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment