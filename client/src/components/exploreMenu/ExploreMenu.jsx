import React from 'react'
import { menu_list } from '../../../src/assets/assets.js'

const ExploreMenu = () => {
  return (
    <div className="flex flex-col justify-start items-center text-white w-full px-4 md:px-0 py-10">
      <div className="text-2xl md:text-3xl font-bold mb-2">
        Explore our menu
      </div>
      <div className="text-sm md:text-md mb-8 max-w-2xl text-gray-300">
        Choose from a wide range of food items. Our mission is to provide you with a delicious, satisfying experience and elevate your dining experience, one delicious dish at a time.
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#232323] rounded-xl shadow-md p-4 w-30 md:w-42 hover:scale-105 transition-transform duration-200"
          >
            <div className="w-16 h-16 md:w-28 md:h-28 mb-2 flex items-center justify-center">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="object-cover w-full h-full rounded-full border-2 border-tomato shadow"
              />
            </div>
            <div className="text-base md:text-lg font-semibold text-center mt-2">
              {item.menu_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu