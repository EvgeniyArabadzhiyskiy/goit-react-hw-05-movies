import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #3719df;
`;

export const SiteNavLink = styled(NavLink)`
  font-weight: 500;
  margin-left: 20px;
  padding: 8px 16px;
  font-size: 20px;
  border-radius: 4px;
  transition: background-color 200ms linear;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active){
    color: #3719df;
    background-color: yellow;
  }
`;
