import React from 'react';

const New = () => {
  return (
  <div className=" NewParent flex justify-center items-center h-screen  border-red-900 border-8 ">
      <section className="text-center py-10">
        <h1 className="text-4xl font-semibold mb-4 text-custom-200">New</h1>
        <div className="border-b-4 border-custom-200 w-16 mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold mb-4 text-custom-50">Personalized Nutrition Program</h2>
        <p className="text-gray-600 mb-8 text-center">
        Our 3-step program jumpstarts your health journey. With your Essential Nutrition Report, we provide a  <br/> tailored daily nutrition program based on your genetic needs. Get personalized vitamins and ongoing <br/> support from our expert dietitians for lasting health, starting today.
        </p>
        <div className=" NewChild flex  items-center justify-around  ">
          <div className="md:w-1/2 flex items-center justify-around  ">
            <img src="./DoctorWriting.png" alt="" className="rounded-lg w-2/3 " />
          </div>
          <div className=" NewChild1 md:w-1/2 mt-4 md:mt-0 " >
            <button className="bg-custom-200 text-right text-white font-semibold rounded-full lg:px-6 lg:py-2  sm:px-4 sm:py-1 mb-4">Step 1</button>
            <h3 className=" font-semibold text-left text-custom-50 lg:text-5xl sm:text-3xl font-sans mb-2">Essential Nutrition Report</h3>
            <p className="text-gray-600  font-semibold mb-8  text-left">
            Embarking on a mission to unlock the secrets hidden within your DNA, GenoPalate has revolutionized the way people approach their health and nutrition. By analyzing your genetic profile, we provide you with a comprehensive understanding of how your body responds to different foods, empowering you to make informed choices tailored to your unique genetic makeup.
            </p>

            <a href="#" className="bg-custom-200  text-white px-6 py-3 rounded-full text-lg hover:bg-custom-200 transition duration-300 ease-in-out">Get Started</a>
          </div>   
               </div>
      </section>
    </div>
  );
};

export default New;
