import React from 'react';

// improt icons
import { IoClose } from "react-icons/io5"


const NavMobile = ({ setNavMobile }) => {
  return <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
    <IoClose onClick={() => setNavMobile(false)}
      className='text-4xl absolute left-2 top-6 cursor-pointer hover:text-red-500' />

    <ul className='flex flex-col items-center justify-center space-y-8 font-secondary h-full'>
      <li className='border-b-[3px] border-transparent transition-all ease-out hover:border-[#b936f5] cursor-pointer'> <a href="/" className='text-xl'> Home </a></li>

      <li className='border-b-[3px] border-transparent transition-all ease-out hover:border-[#b936f5] cursor-pointer'> <a href="/" className='text-xl'> Company </a></li>

      <li className='border-b-[3px] border-transparent transition-all ease-out hover:border-[#b936f5] cursor-pointer'> <a href="/" className='text-xl'> Features </a></li>
      <li className='btn'> <a href="#" className='text-lg'> Sign up </a></li>
    </ul>
  </nav>
};

export default NavMobile;
