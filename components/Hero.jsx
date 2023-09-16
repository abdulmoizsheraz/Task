import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="bg-custom-100 text-white  flex items-center border " style={{height:"600px"}}>
        <div className="w-1/2 p-10">
            <h1 className="text-4xl text-custom-50 mb-4 font-sans font-bold ">Unlock Your Health </h1>
            <h1 className="text-5xl  tracking-widest font-sans font-bold text-custom-200 ">Potential</h1>
            <p className="text-lg mb-6  text-custom-50">Personlized Nutration prepared by your DNA</p>
            <a href="#" className="bg-custom-200 text-white px-6 py-3 rounded-full text-lg hover:bg-custom-200 transition duration-300 ease-in-out">Get Started</a>
        </div>
        <div className="w-1/2 relative">
        <img src="./leaves.png" alt="leaves" style={{"top":"-270px"}} className="absolute top-0 right-0  rounded-lg top "/>

            <img src="./bottle.png" alt="Image 2"  className=" bottle absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2  rounded-lg " />
        </div>
    </section>
    <section className=''>
    <div class='companies flex flex-wrap w-full justify-center md:justify-around items-center'>
  <img src="./pfizer.png" alt="" class='w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0' />
  <img src="./sanofi.png" alt="" class='w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0' />
  <img src="./merck.png" alt="" class='w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0' />
  <img src="./novartis.png" alt="" class='w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0' />
  <img src="./merck.png" alt="" class='w-full sm:w-1/2 md:w-auto' />
</div>

</section>

    </>
    
  )
}

export default Hero