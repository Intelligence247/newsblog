import React from 'react'

const Hydro = (props) => {
  return (
<div>
    <h1 className='text-white text-[1.5rem]'>{props.title}</h1>
    <p className='text-white opacity-[0.7]'>{props.desc}</p>
</div>
  )
}

export default Hydro