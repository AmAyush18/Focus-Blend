import React from 'react'
import hero from '../assets/hero.png'

function Hero() {
    const HEADING = `Unleash the power of focus with Seremy, where tranquility meets productivity in a symphony of ambient sounds`;

  return (
    <div className='w-[90%] m-auto flex flex-col md:flex-row items-center justify-center !pt-4'>
        <div className="w-[95%] md:w-[70%] m-auto py-5">
            <h1 className='text-[28px] md:text-[40px] font-bold text-center text-[#283618] w-[90%] m-auto'> Unleash the power of focus with {" "}<span className='text-[#BC6C25]'>Serene</span>, where <span className='text-[#BC6C25]'>tranquility</span>  meets <span className='text-[#BC6C25]'>productivity</span>  in a symphony of ambient sounds</h1>
        </div>
        <div className="w-[95%] md:w-[40%]">
            <img src={hero} alt=" " className='w-[360px] h-[320px] md:w-[440px] md:h-[440px] pt-2' />
        </div>
    </div>
  )
}

export default Hero

// Unleash the power of focus with Seremy, where tranquility meets productivity in a symphony of ambient sounds.