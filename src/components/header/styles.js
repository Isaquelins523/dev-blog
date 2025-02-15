import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2a3d66;
  color: #fff;
  font-family: Arial, sans-serif;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: #ff7f50;
  }
`;
