import { useState } from "react"
// import React {useState} from 'react'

const Nav = () => {
  const [menu, setMenu] = useState(false)
const handleshownav=()=>{
  setMenu(!menu)
}
  return (
    <header className='flex justify-between items-center'>
    <div className="icon">
      <img src="/media/logo.svg" alt="" />
    </div>
    <img src="/media/icon-menu.svg" className='lg:hidden block  z-[1] fixed' alt="" onClick={handleshownav}/>
    <div className={`nav ${menu && 'active'}`} >
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

// https://www.codevertiser.com/reactjs-responsive-navbar/#:~:text=You%20can%20make%20the%20Navbar,can%20use%20a%20useMediaQuery%20hook.