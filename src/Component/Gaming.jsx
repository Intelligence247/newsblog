import React from 'react'

const Gaming = (props) => {
  return (
    <div className='flex items-center gap-4'>
        <img src={props.img} alt="" className='w-[5rem]'/>
        <div className="retro">
            <h1 className='text-[#cac7ce] lg:text-[2rem] font-[600] text-[1.5rem]'>{props.num}</h1>
            <p className='font-[700] hover:text-red-500 cursor-pointer'>{props.desc1}</p>
            <p className='text-[#cac7ce] leading-5 lg:text-[1rem] text-[.95rem]'>{props.desc2}</p>
        </div>
    </div>
  )
}
export default Gaming