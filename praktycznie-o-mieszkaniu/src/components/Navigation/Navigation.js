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
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  color: #fbd35d;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 10px 20px;

  .active {
    background-color: #fbd35d;
    color: black;
    border-radius: 10px;
    padding: 10px 20px;
  }
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
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
      </NavListItem>
      <NavListItem>
        <Link to="/about" activeClassName="active">
          O mnie
        </Link>
      </NavListItem>
      <NavListItem>
        <Link to="/gallery" activeClassName="active">
          Galeria
        </Link>
      </NavListItem>
      <NavListItem>
        <Link to="/contact" activeClassName="active">
          Kontakt
        </Link>
      </NavListItem>
    </NavList>
  </NavWrapper>
)

export default Navigation
