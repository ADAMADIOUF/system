import React, { useState, useEffect } from 'react'
import data from './../welcomeDataSlider'
import styled from 'styled-components'

const WelcomeSlider = () => {
  const [people, setPeople] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (activeIndex < 0) {
      setActiveIndex(lastIndex)
    }
    if (activeIndex > lastIndex) {
      setActiveIndex(0)
    }
  }, [activeIndex, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex(activeIndex + 1)
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [activeIndex])
  return (
    <Div>
      <div className='carousel'>
        <div
          className='inner'
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {people.map((item) => {
            return (
              <div
                key={item.id}
                className='carousel-item'
                style={{ width: '100%' }}
              >
                <div className='carousel-item-text'>
                  <p> {item.description}</p>
                 
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
    </Div>
  )
}
const Div = styled.section`
  .carousel {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ff0000;
    color:#fff
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    margin-top: 0;
    text-transform: uppercase;
  }
`

export default WelcomeSlider
