import React from 'react'

const Nav = () => {
  return (
    <header className='flex justify-between items-center'>
    <div className="icon">
      <img src="/media/logo.svg" alt="" />
    </div>
    <div className="nav flex gap-[3rem]" >
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