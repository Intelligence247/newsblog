import React from 'react'

const Nav = () => {
  return (
    <header className='flex justify-between items-center'>
    <div className="icon">
      <img src="/media/logo.svg" alt="" />
    </div>
    <img src="/media/icon-menu.svg" className='lg:hidden block' alt="" />
    <div className="nav" >
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