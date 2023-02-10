import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logoworld.png'
import WelcomeSlider from './WelcomeSlider'
const TopNav = () => {
  return (
    <Wrapper>
      <WelcomeSlider/>
      <div className='nav-top'>
        <div className='section-center container-top-nav'>
          <article>
            <Link to={`/`}>
              <img src={logo} alt='' className='logo' />
            </Link>
          </article>
          <article className='top-nav-shop'>
            <Link to={`/products`}>
              <h3> la boutique</h3>
            </Link>
          </article>
          <article className='top-nav-join'>
            
              <div>
                <h6>nous joindre</h6>
                <h5>+(221) 777618072</h5>
              </div>
            
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .nav-top {
    background: var(--clr-primary-4);
   
  }
  .logo {
    width: 15rem;
  }
  .top-nav-shop h3 {
    text-transform: capitalize;
    color: #fff;
    font-size: 2rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .top-nav-shop h3:hover {
    color: var(--clr-primary-1);
  }
  .top-nav-join h6 {
    color: var(--clr-primary-5);
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .top-nav-join h5 {
    color: #fff;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .container-top-nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rem;
    }
  }
`
export default TopNav
