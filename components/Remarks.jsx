import React from 'react'

const Remarks = () => {
  return (
    <>

    <div className="flex flex-col mt-10 p-12 h-4/5  md:flex-row items-center justify-around  bg-custom-300 ">
    <div className="md:w-1/2 mt-4 md:mt-0 " style={{"margin-right":"-157px"}} >
      <h3 className=" font-semibold text-left text-custom-50 text-5xl font-sans mb-2">Your Success Matters to us</h3>
      <p className="text-gray-600  font-semibold mb-8  text-left">
      A decade ago, our team of researchers made a groundbreaking genetic discovery that fueled my passion to help others. That's when GenoPalate was born. With experts in genetics, medicine, and nutrition, we're revolutionizing lifelong health through personalized eating. It's been an incredible journey, witnessing our customers find happiness and wellness. Now, with 84% of Americans facing metabolic health issues, we're committed to reshaping our future together.<br/><br/><br/>

Let's move mountains—for ourselves, our loved ones, and our community. We can't wait to hear about your successes. <br/><br/>

<span className='font-bold text-custom-50'>Dr. James Williams </span> <br/> <span className='font-semibold'>Phd</span>
      </p>

    </div>
    <div className="md:w-1/2 flex items-center justify-around  "  >
      <img src="./Doctor.png" alt="" className="rounded-lg w-1/2 " />
    </div>
         </div>
         <div className='w-full h-20 px-10 bg-custom-50 flex items-center justify-between'>
<p className='text-white'>Take the first step to a healthier you.</p>
<a href="#" className="bg-custom-200  text-white lg:px-4 lg:py-2 sm:px-1 sm:py-1 lg:rounded-full sm:rounded-3xl text-lg hover:bg-custom-200 transition duration-300 ease-in-out">Get Started</a>
         </div>
         </>
  )
}

export default Remarks