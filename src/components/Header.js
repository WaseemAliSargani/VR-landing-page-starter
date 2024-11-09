import React from 'react';

// import components
import Logo from "../assets/img/logo.svg"
import Nav from "./Nav"

// import icons
import { HiMenu } from 'react-icons/hi'


const Header = ({ setNavMobile }) => {
  return (
    <header
      data-aos='fade-down'
      data-aos-delay='900'
      className='py-6'>
      <div className="container mx-auto">
        <div className='flex items-center justify-between '>
          {/* logo */}
          <a href="/">
            <img className='h-[30px]' src={Logo} alt="" />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenu onClick={() => setNavMobile(true)}
            className='lg:hidden text-3xl text-white cursor-pointer hover:text-white/80' />
        </div>
      </div>
    </header>
  )
};

export default Header;
