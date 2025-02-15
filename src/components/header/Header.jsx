import React from "react";

import { Link } from "react-router-dom";
import { HeaderWrapper, Logo, Nav, NavItem, NavList, NavLink } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">Blog Apiki</Link>
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contato">Contato</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
