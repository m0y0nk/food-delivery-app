import React from 'react'

const Header = () => {
  return (
    <div className="header flex items-center min-h-[45vh] px-6 md:px-16 w-full">
      <div className="w-full md:w-2/3 header-content">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 relative md:static left-0 top-0">
          Order your favorite food here
        </h2>
        <p className="text-bold md:text-lg mb-6 relative md:static left-0 top-0">
          Choose from a wide range of food items featuring a variety of cuisines including Indian, Chinese, Italian, and more. 
          <br/>
          Just at your finger tips.
        </p>
        <button className="text-sm md:text-md border border-gray-300 text-black hover:text-tomato bg-white cursor-pointer rounded-3xl px-4 py-2 transition-all duration-200">
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header