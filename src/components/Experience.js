import React from 'react';

// import immages
import Img1 from "../assets/img/exp-img1.png"
import Img2 from "../assets/img/exp-img2.png"

const Experience = () => {
  return <section className='mb-12 lg:mb-24'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row min-h-[480px] lg:space-x-20'>
        <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
          {/* images */}
          <div
            data-aos='fade-down'
            data-aos-offset='400'
            className='self-start lg:m-6 xl:mt-0'>
            <img src={Img1} alt="" />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='400'
            className='self-end'>
            <img src={Img2} alt="" />
          </div>
        </div>

        {/* text */}
        <div
          data-aos='fade-left'
          data-aos-offset='400'
          className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'>
          <h2 className='text-3xl font-bold mb-6'> New Experience in Playing Games </h2>
          <p className='font-secondary mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eius cum fugit tenetur ipsam natus aliquam, eligendi reiciendis minus totam!
          </p>
          <button className='btn'>Get it now</button>
        </div>
      </div>
    </div>
  </section>
};

export default Experience;
