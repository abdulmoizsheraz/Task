import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-custom-50 p-4 ">
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
                <span className="text-white text-lg font-semibold"> Logo</span>
            </div>

            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400">Home</a>
                <a href="#" className="text-white hover:text-gray-400">About</a>
                <a href="#" className="text-white hover:text-gray-400">Contact</a>
            </div>

            <div className="md:flex items-center">
                <button className=" text-white px-4 py-2 rounded-full border mr-2">Login</button>
                <button className="bg-custom-200 hover:bg-custom-200 text-white px-4 py-2 rounded-full">Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar