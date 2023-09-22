import React from 'react'
import { achievement } from '../assets'
import {PiGraduationCapLight} from 'react-icons/pi'
import {BsCameraVideo} from 'react-icons/bs'
import {HiOutlineUserGroup} from 'react-icons/hi2'

function Acheivements() {
  return (
    <div className='w-full bg-white p-5 py-24' >
        <div className='md:max-w-[1480px] max-w-[500px]  m-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center gap-3'>
                <h1 className='pt-2 md:text-5xl text-4xl font-medium md:leading-[72px]'>Our <span className='text-[#20B486]'>Achievement</span></h1>
                <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident,</p>
                <div className='grid gap-8 py-16 grid-cols-2'>
                    <div className='p-2 flex'>
                        <div className='p-4 bg-[#E9F8F3] rounded-md'>
                            <PiGraduationCapLight
                                size={30}
                                color='#1A906B'
                            />
                        </div>
                        <div className='px-2'>
                            <h2 className='p-1 text-lg font-bold' >300</h2>
                            <p className='pt-2 px-1 text-gray-600'>Instructor</p>
                        </div>
                    </div>
                    <div className='p-2 flex'>
                        <div className='p-4 bg-[#FFFAF5] rounded-md'>
                            <BsCameraVideo
                                size={30}
                                color='#FFC27A'
                            />
                        </div>
                        <div className='px-2'>
                            <h2 className='p-1 text-lg font-bold' >10,000+</h2>
                            <p className='pt-2 px-1 text-gray-600'>Video</p>
                        </div>
                    </div>
                    <div className='p-2 flex'>
                        <div className='p-4 bg-[#FFEEF0] rounded-md'>
                            <PiGraduationCapLight
                                size={30}
                                color='#ED4459'
                            />
                        </div>
                        <div className='px-2'>
                            <h2 className='p-1 text-lg font-bold' >20,000+</h2>
                            <p className='pt-2 px-1 text-gray-600'>Student</p>
                        </div>
                    </div>
                    <div className='p-2 flex'>
                        <div className='p-4 bg-[#F0F7FF] rounded-md'>
                            <HiOutlineUserGroup
                                size={30}
                                color='#0075FD'
                            />
                        </div>
                        <div className='px-2'>
                            <h2 className='p-1 text-lg font-bold' >1,00,000+</h2>
                            <p className='pt-2 px-1 text-gray-600'>User's</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <img className='m-auto order-first md:order-last' src={achievement} alt="hero image" />
        </div>
    </div>
  )
}

export default Acheivements