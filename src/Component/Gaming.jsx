import React from 'react'

const Gaming = (props) => {
  return (
    <div className='flex items-center gap-4'>
        <img src={props.img} alt="" className='w-[5rem]'/>
        <div className="retro">
            <h1 className='text-[#cac7ce] text-[2rem] font-[600]'>{props.num}</h1>
            <p className='font-[700]'>{props.desc1}</p>
            <p className='text-[#cac7ce] leading-5'>{props.desc2}</p>
        </div>
    </div>
  )
}

export default Gaming