import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BiFoodMenu } from 'react-icons/bi';

export const Nav = styled.nav`
  border-top:.5vh solid black;
  background: gold;
  height: 70px;
  display: flex;
  justify-content: center;
  font-weight: 400;
  position: fixed;
  width: 100vw;
`;

export const NavLink = styled(Link)`
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color:black;

  p {
    transform: translate(-175%, 100%);
    // font-weight: bold;
  }
`;

export const Bars = styled(BiFoodMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
