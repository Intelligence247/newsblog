import React from 'react'
import Gaming from './Gaming'

const Gamingwrapper = () => {
  const mapArr = [
    {
      img: "/media/image-retro-pcs.jpg",
      num: '01',
      desc1: 'Reviving Retro Pcs',
      desc2: 'What happens when old PCs are given modern upgrades?',
    }, {
      img: "/media/image-gaming-growth.jpg",
      num: '02',
      desc1: 'Top 10 Laptops of 2022',
      desc2: 'Our best picks for various needs and budgets.',
    }, {
      img: "/media/image-top-laptops.jpg",
      num: '03',
      desc1: 'The Growth of Gaming',
      desc2: 'How the pandemic has sparked fresh opportunities',
    }
  ]
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center gap-4 mt-[2rem]'>

      {
        mapArr.map((m, index) => (
          <Gaming key={`${m}-${index}`}
            img={m.img}
            num={m.num}
            desc1={m.desc1}
            desc2={m.desc2}
          />

        ))}
    </div>
  )
}

export default Gamingwrapper