import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import {
  Home,
  Promotions,
  ProductsSamsung,
  ProductsHuawei,
  ProductsIphone,
  ProductsItel,
  ProductsSony,
  ProductsNokia,
  Products,
  ProductsTecKno,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
  ProductsAccesory,
  ProductsTablet,
} from './pages'
import TopNav from './components/TopNav'
import ProductsCharge from './pages/ProductsCharge'
import { Footer } from './components'



const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />

        <Route path='/tecno' element={<ProductsTecKno />} />

        <Route path='/samsung' element={<ProductsSamsung />} />
        <Route path='/huawei' element={<ProductsHuawei />} />
        <Route path='/iphone' element={<ProductsIphone />} />
        <Route path='/itel' element={<ProductsItel />} />
        <Route path='/promotions' element={<Promotions />} />
        <Route path='/nokia' element={<ProductsNokia />} />
        <Route path='/ecouteur' element={<ProductsAccesory />} />
        <Route path='/tablet' element={<ProductsTablet />} />
        <Route path='/charge' element={<ProductsCharge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
