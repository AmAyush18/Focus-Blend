import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navOptions = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Donate',
        url: '/donate'
    }
]

function Header() {
  return (
    <div className="bg-gradient-to-r to-[#283618] from-[#606C38] py-2 shadow-sm shadow-[#606C38]">
        <div className='w-[90%] m-auto flex justify-between'>
            <Link to={'/'} className='flex gap-2 items-center'>
                <img src={logo} alt="" className='w-[24px] h-[24px]'/>
                <h1 className='text-2xl font-bold text-[#FEFAE0]'>Serene</h1>
            </Link>
            <div className='flex gap-3'>
                {
                    navOptions.map((nav) => (
                        <NavLink key={nav.url} to={`${nav.url}`} className={({isActive}) => `text-lg ${isActive ? 'text-[#DDA15E]' : 'text-[#FEFAE0]' }`}>
                            {nav.title}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header