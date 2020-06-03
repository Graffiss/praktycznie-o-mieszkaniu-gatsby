import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Raleway";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
`

const NavListItem = styled.li`
  font-weight: 600;
  margin-left: 32px;
`

const Navigation = () => (
  <NavWrapper>
    <Logo>
      <Link to="/">Praktycznie o mieszkaniu</Link>
    </Logo>
    <NavList>
      <NavListItem>
        <Link to="/blog">Blog</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/about">O mnie</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/gallery">Galeria</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/contact">Kontakt</Link>
      </NavListItem>
    </NavList>
  </NavWrapper>
)

export default Navigation
