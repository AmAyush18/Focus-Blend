import React from 'react'
import { Link } from 'react-router-dom'
import buymeacoffee from '../assets/bmc_qr.png';
import buymeacoffee_button from '../assets/bmc-button.png';

function Donate() {
  return (
    <div className="w-full bg-[#FEFAE0]">
      <div className="container w-[70%] mx-auto !pt-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Support Serene</h2>
        
        <p className="text-gray-700 leading-loose mb-4 text-center">
          Serene is a labor of love. If you find it helpful, consider supporting us by buying us a coffee. Your contribution goes a long way in keeping Serene free and continuously improving.
        </p>

        <div className="flex items-center justify-center">
          <Link to="https://www.buymeacoffee.com/amayush18" target="_blank" rel="noopener noreferrer">
            <img src={buymeacoffee_button} alt="" className='w-[400px] h-[78px]' />
          </Link>
        </div>
        
        <div className="flex items-center justify-center mt-5">
          <img src={buymeacoffee} alt="" className='w-[420px] h-[420px]' />
        </div>
      </div>
    </div>
  )
}

export default Donate