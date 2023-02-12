import React from 'react'

const Hydro = (props) => {
  return (
<div>
    <h1 className='text-white text-[1.5rem] hover:cursor-pointer hover:text-[#eeaa4f]'>{props.title}</h1>
    <p className='text-white opacity-[0.7] lg:text-[1rem] text-[1.3rem]'>{props.desc}</p>
</div>
  )
}

export default Hydro