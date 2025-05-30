import React from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'

const Home = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto justify-center">
      <Header />
      <ExploreMenu />
    </div>
  )
}

export default Home