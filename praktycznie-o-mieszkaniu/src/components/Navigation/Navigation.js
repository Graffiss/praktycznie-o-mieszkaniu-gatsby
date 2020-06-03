import React from "react"
import styled from "styled-components"

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Raleway";
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const NavListItem = styled.li`
  font-weight: 600;
  margin-left: 32px;
`

const Navigation = () => (
  <NavWrapper>
    <Logo>Praktycznie o mieszkaniu</Logo>
    <NavList>
      <NavListItem>Blog</NavListItem>
      <NavListItem>O mnie</NavListItem>
      <NavListItem>Galeria</NavListItem>
      <NavListItem>Kontakt</NavListItem>
    </NavList>
  </NavWrapper>
)

export default Navigation
