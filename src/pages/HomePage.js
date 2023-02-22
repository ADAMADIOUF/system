import React from 'react'
import { FeaturedProducts, Services, Slider } from '../components'
import Banner from '../components/Banner'
import FirstCategories from '../components/FirstCategories'
import ProductSlider from './ProductSlider'



const HomePage = () => {
  return (
    <div>
      
      <Slider/>
      <Services/>
      <FirstCategories/>
      <FeaturedProducts/>
      <Banner/>
      <ProductSlider/>
    </div>
  )
}

export default HomePage
