import React from 'react'
import StarRating from './StarRating'
function Card({props}) {
  return (
    <div className='m-2 my-4'>
        <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl'>
            <div className='border border-b  p-3'>
            <img src={props.linkImg} className='h-50 w-full object-cover rounded-lg' />
            <p className='py-3 text-lg text-gray-800 truncate'>{props.title}</p>
            <StarRating rating={props.rating}/>
            </div>
            <h2 className='p-4'>{props.price}</h2>
            <div className='absolute top-0 left-1 m-5 bg-white opacity-60 p-1 leading-4 rounded-md'>
              {props.category}
            </div>
        </div>
    </div>
  )
}

export default Card