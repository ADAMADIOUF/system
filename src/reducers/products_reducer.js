import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
if(action.type ===GET_PRODUCTS_BEGIN){
 return{...state,products_loading:true}
}
if (action.type === GET_PRODUCTS_SUCCESS) {
 const featured_products = action.payload.filter((products)=>
products.featured === true
 )
 const promotions = action.payload.filter(
   (products) => products.promotion === true
 )
 const tecno = action.payload.filter((products) => products.tecno === true)
 const nokia = action.payload.filter(
   (products) => products.nokia === true
 )
 const samsung = action.payload.filter((products) => products.samsung === true)
 const iphone = action.payload.filter((products) => products.iphone === true)
 const huawei = action.payload.filter((products) => products.huawei === true)
 
 const itel = action.payload.filter((products) => products.itel === true)

 const headphone = action.payload.filter((products) => products.accesory === true)
 const tablet = action.payload.filter(
   (products) => products.tablete === true
 )
 const charge = action.payload.filter((products) => products.charge === true)
  return {
    ...state,
    products_loading: false,
    products: action.payload,
    featured_products,
    promotions,nokia,samsung,huawei,iphone,itel,tecno,headphone,tablet,charge
  }
}
if (action.type === GET_PRODUCTS_ERROR) {
  return { ...state, products_loading: false,products_error:true }
}
if(action.type===GET_SINGLE_PRODUCT_BEGIN){
 return { ...state, single_product_loading: true, single_product_error: false }
}
if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
  return { ...state, single_product_loading:false, single_product:action.payload  }
}
if (action.type === GET_SINGLE_PRODUCT_ERROR) {
  return { ...state, single_product_loading: false, single_product_error: true }
}

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
