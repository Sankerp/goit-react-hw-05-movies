import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 12px;
  margin-bottom: 20px;
  border: 1px solid #3f51b5;
  box-shadow: 0px 10px 7px #ccc, 0px 0px 5px #ccc;

  > nav {
    display: flex;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: #3f51b5;
  font-weight: 600;

  &.active {
    color: #fff;
    background-color: #3f51b5;
  }
`;
