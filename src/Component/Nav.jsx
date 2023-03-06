import { useState } from "react"
import React from "react"

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
    <img src={menu ? '/media/icon-menu-close.svg':'/media/icon-menu.svg'} className='lg:hidden block  z-[1]' alt="" onClick={handleshownav}/>
    </div>
    <div className={`nav ${menu && 'active'}`}>
      <p>Home</p>
      <p>New</p>
      <p>Popular</p>
      <p>Trending</p>
      <p>Categories</p>
    </div>
    <div className={`nav2 ${!menu && 'actnav2'}`}></div>
  </header>
  )
}

export default Nav
