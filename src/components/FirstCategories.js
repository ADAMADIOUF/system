import React from 'react'
import styled from 'styled-components'
import f1 from "../assets/f1.png"
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import f4 from '../assets/f4.png'
import f5 from '../assets/f5.png'
import f6 from '../assets/f6.png'
import f7 from '../assets/f7.png'
import f8 from '../assets/f8.png'


const FirstCategories = () => {
  return (
    <Wrapper className='first-categories'>
      <div className='section-center '>
        <div className='first-categories-container'>
          <article>
            <img src={f1} alt='' />
          </article>
          
          <article>
            <img src={f3} alt='' />
          </article>
          
          <article>
            <img src={f5} alt='' />
          </article>
          <article>
            <img src={f6} alt='' />
          </article>
          <article>
            <img src={f7} alt='' />
          </article>
          <article>
            <img src={f8} alt='' />
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .first-categories-container {
    margin-top: 2rem;
  }
  .first-categories-container img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    .first-categories-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
  @media (min-width: 992px) {
    .first-categories-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default FirstCategories