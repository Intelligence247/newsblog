import { useState } from "react"
// import React {useState} from 'react'

const Nav = () => {
  const [menu, setMenu] = useState(false)
const handleshownav=()=>{
  setMenu(!menu)
}
  return (
    <header className='flex justify-between items-center'>
      <div className="twoimages">
    <div className="icon">
      <img src="/media/logo.svg" alt="" />
    </div>
    <img src={menu?'/media/icon-menu-close.svg':'/media/icon-menu.svg'} className='lg:hidden block  z-[1]' alt="" onClick={handleshownav}/>
    </div>
    <div className={`nav ${menu && 'active'}`}>
      <p>Home</p>
      <p>New</p>
      <p>Popular</p>
      <p>Trending</p>
      <p>Categories</p>
    </div>
  </header>
  )
}

export default Nav
