import React from 'react'
import { logo } from '../assets'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram ,BsDribbble ,BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer className="w-full bg-white p-5 py-[150px]">
        <div className="md:max-w-[1480px] max-w-[500px] m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className=''>
                <img src={logo} className='py-2' alt="" />
                <h3 className='py-2 font-bold text-lg'>
                    Contact Us 
                </h3>
                <p className='p-1 text-gray-500'>Call:+123400123</p>
                <p  className='p-1 text-gray-500'>Praesent nulla massa, hendrerit <br /> vestibulum gravida in, feugiat auctor felis.</p>
                <p className='p-1 text-gray-500'>Email:example@gmail.com</p>
                <div className='flex gap-2 mt-2'>
                    <div  className='bg-[#E9F8F3] p-3 rounded-md'>
                        <FaFacebookF size={24} color='#4DC39E'/>
                    </div>
                    <div className='bg-[#E9F8F3] p-3 rounded-md'>
                        <BsInstagram size={24} color='#4DC39E'/>
                    </div>
                    <div className='bg-[#E9F8F3] p-3 rounded-md'>
                        <AiOutlineLinkedin size={24} color='#4DC39E'/>
                    </div>
                    <div className='bg-[#E9F8F3] p-3 rounded-md'>
                        <BsDribbble size={24} color='#4DC39E'/>
                    </div>
                    <div className='bg-[#E9F8F3] p-3 rounded-md'>
                        <BsGithub size={24} color='#4DC39E'/>
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='py-2 font-bold text-lg'>Explore</h3>
                <div className='p-1 text-gray-500'>Home</div>
                <div className='p-1 text-gray-500'>About</div>
                <div className='p-1 text-gray-500'>Course</div>
                <div className='p-1 text-gray-500'>Blog</div>
                <div className='p-1 text-gray-500'>Contact</div>
            </div>
            <div className=''>
                <h3 className='py-2 font-bold text-lg'>Category</h3>
                <div className='p-1 text-gray-500'> Design</div>
                <div className='p-1 text-gray-500'>Development</div>
                <div className='p-1 text-gray-500'>Marketing</div>
                <div className='p-1 text-gray-500'>Business</div>
                <div className='p-1 text-gray-500'>Lifestyle</div>
                <div className='p-1 text-gray-500'>Photography</div>
                <div className='p-1 text-gray-500'>Music</div>
            </div>
            <div className=''>
                <h3 className='py-2 font-bold text-lg'>Subscribe</h3>
                <div className='p-1 py-4 text-gray-500'>Lorem Ipsum has been them an industry printer took a galley make book.</div>
                <input type="text" placeholder='Email here' className='bg-[#F2F3F4] w-full p-3 focus:border-none'/>
                <button className="px-8 py-4 mt-5 rounded-md bg-[#20B486] text-white font-bold w-fit">
                Subscribe Now
            </button>
            </div>
        </div> 
    </footer>
  )
}

export default Footer