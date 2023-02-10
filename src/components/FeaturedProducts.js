import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import {
  BsFillHeartFill
} from 'react-icons/bs'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section-center'>
      <div className='title-products'>
        <span>
          <BsFillHeartFill />
        </span>

        <h5>Les produits les plus vendus </h5>
        <hr className='fhr' />
      </div>
      <div className=' section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title-products {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  @media (min-width: 768px) {
    .fhr {
      width: 10rem;
      height: 0.1rem;
      background: grey;
      border-radius: var(--radius);
    }
  }
  .title-products span {
    color: var(--clr-primary-5);
    font-size: 1.5rem;
  }
  @media (min-width: 992px) {
    .fhr {
      width: 50rem;
    }
  }
  @media (min-width: 768px) {
    .featured {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  @media (min-width: 992px) {
    .featured {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default FeaturedProducts
