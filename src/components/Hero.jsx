import React from 'react'
import { heroImg } from '../assets'
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
  return (
    <div className='w-full bg-white p-5 py-24' >
        <div className='md:max-w-[1480px] max-w-[500px]  m-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p>
                <h1 className='py-2 md:text-6xl text-5xl font-medium md:leading-[72px]'>Access To <span className='text-[#20B486]'>5000+</span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions</h1>
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident,</p>
                <form className='max-w-[700px] p-4 flex justify-between rounded-md' style={{boxShadow: '-4px -4px 44px 0px #00000014'}}>
                    <input className='bg-white' type="text" placeholder='What do want to learn?'></input>
                    <button>
                        <AiOutlineSearch
                            size={20}
                            className='icon'
                            style={{color:'#000'}}
                        />
                    </button>
                </form>
            </div>
            <img className='order-first md:order-last' src={heroImg} alt="hero image" />
        </div>
    </div>
  )
}

export default Hero