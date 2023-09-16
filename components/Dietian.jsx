import React from 'react'

const Dietian = () => {
  return (
    <div className="flex flex-col mt-10 md:flex-row items-center justify-around  ">
    <div className="md:w-1/2 flex items-center justify-around  ">
      <img src="./DoctorWriting.png" alt="" className="rounded-lg w-2/3 " />
    </div>
    <div className="md:w-1/2 mt-4 md:mt-0  " style={{"margin-left":"-157px"}}>
      <button className="bg-custom-200 text-right text-white font-semibold rounded-full px-6 py-2 mb-4">Step 3</button>
      <h3 className=" font-semibold text-left text-custom-50 text-5xl font-sans mb-2">Dietitian Coaching</h3>
      <p className="text-gray-600  font-semibold mb-8  text-left">
      Unlock your unique nutritional needs with personalized vitamins. Our advanced genetic testing and algorithm create a tailored blend of vitamins and minerals based on your DNA, age, gender, and diet. Take control of your well-being and embark on a transformative journey towards a healthier life.
      </p>

      <a href="#" className="bg-custom-200  text-white px-6 py-3 rounded-full text-lg hover:bg-custom-200 transition duration-300 ease-in-out">Learn more</a>
    </div>    
        </div>
  )
}

export default Dietian