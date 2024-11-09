import React from 'react';
// import components
import Users from "../components/Users"

// import image
import Img from "../assets/img/banner-img.png"

const Banner = () => {
  return <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left ">
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row '>

        {/* text */}
        <div>
          <h1
            data-aos='fade-down'
            data-aos-delay='500'
            className='text-3xl font-bold mb m-8 lg:text-5xl lg:leading-snug'> Let's Explore <br /> Three-Dimensional Visually. </h1>
          <p
            data-aos='fade-down'
            data-aos-delay='600'
            className='font-secondary mb-12 max-w-[400px]  mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quidem commodi fugiat quis placeat veritatis molestiae, laborum.
          </p>
          {/* btns */}
          <div
            data-aos='fade-down'
            data-aos-delay='700'
            className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start
          '>
            <button className='btn'> Get it now </button>
            <a className='border-b-2 border-transparent hover:border-white transition  ease-out' href="#">
              Explor Device
            </a>
          </div>
          <Users />
        </div>

        {/* image */}
        <div data-aos='fade-up' data-aos-delay='700'>
          <img src={Img} alt="" />
        </div>

      </div>
    </div>
  </section>
};

export default Banner;
