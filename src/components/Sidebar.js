import React, { useState,useEffect } from 'react'
import { data } from '../dataSidebar'
import styled from 'styled-components'
import { AiOutlineBars, AiFillCloseCircle } from 'react-icons/ai'
import SubMenu from './SubMenu'

const Sidebar = () => {
   const [scrolled, setScrolled] = useState(false)
   const handleScroll = () => {
     const offset = window.scrollY
     if (offset > 200) {
       setScrolled(true)
     } else {
       setScrolled(false)
     }
   }

   useEffect(() => {
     window.addEventListener('scroll', handleScroll)
   })
   let navbarClasses = ['navbar']
   if (scrolled) {
     navbarClasses.push('scrolled')
   }

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <header className={navbarClasses.join(' ')}>
        <Nav>
          <AiOutlineBars className='nav-icon' onClick={showSidebar} />
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <AiFillCloseCircle className='nav-icon' onClick={showSidebar} />
            {data.map((item, index) => {
              return (
                <SubMenu item={item} key={index} showSidebar={showSidebar} />
              )
            })}
          </SidebarWrap>
        </SidebarNav>
      </header>
    </>
  )
}
const Nav = styled.section`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-icon {
    color: #fff;
    font-size: 3rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
    cursor:pointer;
  }
  .nav-icon:hover{
    color:var(--clr-primary-5);
  }
`
const SidebarWrap = styled.section`
  width: 100%;
`


const SidebarNav = styled.section`
  background: var(--clr-primary-4);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  .nav-icon {
    color: #fff;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
  }
`

export default Sidebar
