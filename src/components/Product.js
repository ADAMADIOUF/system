import React, { useState } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

import {
  BsFillBagCheckFill,
  BsFillHeartFill,
  BsFillEyeFill,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Hearts from './Hearts'


const Product = ({img,price,id,name}) => {
   
  return (
    <Wrapper>
      <div className='container'>
        <Link to={`/products/${id}`}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <div className='products-icons'>
        <span>
          <a href=' https://wa.me/221777618072' className='btn-whatsapp'>
            <BsFillBagCheckFill />
          </a>
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
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    margin-top: 5rem;
    overflow: hidden;
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
export default Product
