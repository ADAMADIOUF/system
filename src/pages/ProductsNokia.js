import React from 'react'

import { Link } from 'react-router-dom'

import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { formatPrice } from '../utils/helpers'
import {
  BsFillBagCheckFill,
  BsFillHeartFill,
  BsFillEyeFill,
} from 'react-icons/bs'
import Hearts from '../components/Hearts'

const ProductsNokia = () => {
  const {
    products_loading: loading,
    products_error: error,
    nokia: featured,
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
        <h5>Les telephones nokia </h5>
        <hr className='fhr' />
        <span>
          <BsFillHeartFill />
        </span>
      </div>
      <div className=' section-center featured'>
        {featured.map((product) => {
          const { name, img, price, id } = product
          return (
            <div key={product.id}>
              <div className='container'>
                <Link to={`/products/${id}`}>
                  <img src={img} alt={name} />
                </Link>
              </div>
              <div className='products-icons'>
                <span>
                  <BsFillBagCheckFill />
                </span>
                <span>
                  <BsFillEyeFill />
                </span>
                <span>
                  <Hearts/>
                </span>
              </div>
              <footer>
                <h5>{name.substring(0, 10)}</h5>
                <p>{formatPrice(price)}</p>
              </footer>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
  .container {
    margin-top: 5rem;
  }

  .container img {
    width: 100%;
    height: 300px;
    border: 1px solid var(--clr-black) none;
    transition: var(--transition);
    cursor: pointer;
  }
  .container img:hover {
    transform: scale(1.1);
    border: 1px solid var(--clr-primary-4);
  }
  .products-icons {
    display: flex;
    justify-content: center;
  }
  .products-icons span {
    color: var(--clr-primary-4);
    margin: 1rem;
    text-align: center;
    display: block;
    font-size: 1.5rem;
  }
  .products-icons span:first-child {
    background: var(--clr-primary-5);
    color: #fff;
    padding: 0.1rem;
    border-radius: var(--radius);
  }
`

export default ProductsNokia
