import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
 
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const {
    name,
    price,
    desc,
    stock,

    id: sku,
    company,
    img,
  } = product

  return (
    <Wrapper>
      <PageHero  product={product}  className="title-hero" />
      <div className='section section-center page'>
        <a href={`/products`} className='btn-single-products'>
          retour a la boutique
        </a>
        <div className='product-center'>
          <ProductImages images={img} />
          <section className='content'>
            <h2>{name}</h2>

            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{desc}</p>
            <p className='info'>
              <span>disponible:</span>
              {stock > 0 ? 'En stock' : 'Rupture de stock'}
            </p>
            <p className='info'>
              <span>UGS:</span>
              {sku}
            </p>
            <p className='info'>
              <span>Marque:</span>
              {company}
            </p>
            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
   .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  .btn-single-products {
    background: var(--clr-black);
    color: var(--clr-primary-6);
    transition: var(--transition);
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    padding: 0.5rem;
    letter-spacing: var(--spacing);
  }
  .btn-single-products:hover {
    background: var(--clr-primary-1);
  }
`

export default SingleProductPage
