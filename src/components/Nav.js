import React from 'react';

const Nav = () => {
  return <nav className='hidden lg:flex'>
    <ul className='flex items-center space-x-12 '>
      <li className='border-b-[3px] border-transparent transition ease-out hover:border-[#b936f5] cursor-pointer'> <a href="/" className='text-xl'> Home </a></li>
      <li className='border-b-[3px] border-transparent transition ease-out hover:border-[#b936f5] cursor-pointer'> <a href="/" className='text-xl'> Company </a></li>
      <li className='border-b-[3px] border-transparent transition ease-out hover:border-[#b936f5] cursor-pointer'> <a href="/" className='text-xl'> Features </a></li>
      <li className='btn'> <a href="#"  className='text-lg'> Sign up </a></li>
    </ul>
  </nav>
};

export default Nav;
