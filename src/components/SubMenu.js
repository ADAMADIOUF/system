import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)
  return (
    <>
    
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index} onClick={showSidebar}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropDownLink>
          )
        })}
    </>
  )
}
const SidebarLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #000;
    border-left: 4px solid var(--clr-primary-3);
    cursor: pointer;
  }
`
const SidebarLabel = styled.span`
  margin-left: 16px;
  
`
const DropDownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: var(--clr-primary-5);
    cursor: pointer;
  }
`

export default SubMenu
