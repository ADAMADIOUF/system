import React from 'react'
import styled from 'styled-components'
import { FaStaylinked, FaMoneyCheck } from 'react-icons/fa'
import { BsCash } from 'react-icons/bs'
import { TiMessages } from 'react-icons/ti'


const Services = () => {
  return (
    <Wrapper>
      <div className='section-center services'>
        <div className='services-container'>
          <article className='service'>
            <span>
              <FaStaylinked />
            </span>
            <h3>world business express</h3>
            <p>une livraison rapide</p>
          </article>
          <article className='service'>
            <span>
              <BsCash />
            </span>
            <h3>paiement à la livraison</h3>
            <p>payer cash à la livraison</p>
          </article>
          <article className='service'>
            <span>
              <FaMoneyCheck />
            </span>
            <h3>qualité & prix</h3>
            <p>des produits de qualité </p>
          </article>
          <article className='service'>
            <span>
              <TiMessages />
            </span>
            <h3>service client</h3>
            <p>disponible 24H/24 et 7j7 </p>
          </article>
        </div>
      </div>
      <div className='first-banner'>
        <h3>tous nos produits sont garantis</h3>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .services{
    margin-top:3rem
  } .service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .service span {
    font-size: 2rem;
    color: var(--clr-primary-5);
  }
  @media (min-width: 992px) {
    .services-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  .first-banner {
    background: var(--clr-primary-5);
    width: 100%;
    padding: 1rem;
  }
  .first-banner h3 {
    color: #fff;
    font-size: 3rem;
    text-align: center;
  }
`
export default Services