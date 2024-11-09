import React, { useState, useEffect } from 'react';

// import Components
import Banner from "./components/Banner"
import Headers from "./components/Header"
import NavMobile from './components/NavMobile'
import Experience from './components/Experience'
import Video from "./components/Video"
import Headsets from "./components/Headsets"
import Testimonial from './components/Testimonial'
import Explore from './components/Explore'


// import Aos on  ( animate on scroll  )
import Aos from "aos"
import 'aos/dist/aos.css'

const App = () => {
  const [navMobile, setNavMobile] = useState(false)

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  })

  return (
    <div className='relative overflow-hidden before:w-[495px] before:h-[250px] before:bg-circle before:bg-no-repeat before:absolute before:-top-0 before:left-[400px] before:hidden before:lg:flex before:-z-10'>
      <Headers setNavMobile={setNavMobile} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${navMobile ? 'right-0' : '-right-full '
          } fixed top-0 bottom-0 w-60 transition-all`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />

    </div>
  )
};

export default App;
