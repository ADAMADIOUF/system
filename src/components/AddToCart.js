import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

import { FaWhatsapp } from 'react-icons/fa'
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()

  const { id} = product
  return (
    <Wrapper>
      <div className='btn-container'>
        <Link
          to={`/cart`}
          className='btn-whatsapp'
          onClick={() => addToCart(id, product)}
        >
          <a href=' https://wa.me/221777618072' className='btn-whatsapp'>
            <FaWhatsapp />
            Commander sur whatsapp
          </a>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn-whatsapp {
    margin-top: 1rem;
    font-size:3rem;
    width: 140px;
    color:#25D366;
  }
`
export default AddToCart
