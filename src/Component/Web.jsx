import React from 'react'
import Hydro from './Hydro'

const Web = () => {
  return (
    <main className=''>
    <div className="web3">
    <img src="/media/image-web-3-desktop.jpg" className='lg:block hidden' alt="" />
    <img src="/media/image-web-3-mobile.jpg" className='blobk lg:hidden' alt="" />
    
    <div className="bright">
      <p className='text-[3rem] font-[700] leading-[2.7rem] lg:w-[48%]'>The Bright Future of Web 3.0?</p>
      <section className='lg:w-[50%]'>
        <p>We dive into the next evolution of the web that claims to put the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button className='px-[1rem] py-[.3rem] bg-red-400 mt-[1.7rem] text-white tracking-[.4rem]'>READ MORE</button>
      </section>
    </div>
    </div>
    
    
    <div className="hydrogen lg:w-[34%] h-[auto] p-[1.5rem] bg-black flex flex-col gap-[1.5rem]">
        <h1 className='text-[#eeaa4f] text-[2.5rem]'>New</h1>
        <Hydro
        title={'Hydrogen VS Electric Cars'}
        desc={'Will Hydrogen-fueled cars ever catch up to EVs?'}/>
<hr className='opacity-[0.7]'/>
        <Hydro
        title={'The Downsides of AI Artistry'}
        desc={'What are the possible adverse effects of on-demand AI image generation?'}/>
<hr />
      <Hydro
        title={'Is VC Funding Drying Up?'}
        desc={'Private funding by VC firms is downs 50% YOY. We take a look at what that means.'}/>
    </div>
    </main> 
  )
}

export default Web