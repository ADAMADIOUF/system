import React from 'react'
import { FeaturedProducts, Services, Slider } from '../components'
import FirstCategories from '../components/FirstCategories'



const HomePage = () => {
  return (
    <div>
      
      <Slider/>
      <Services/>
      <FirstCategories/>
      <FeaturedProducts/>
    </div>
  )
}

export default HomePage
