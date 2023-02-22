import React from 'react'
import b from "../assets/b1.png"
import styled from 'styled-components'
const Banner = () => {
  return (
    <Wrapper>
     <img src={b} alt="" className='img-banner' />
    </Wrapper>
  )
}
const Wrapper = styled.section`
.img-banner{
 margin-top:5rem;
 width:100%;
}

`
export default Banner