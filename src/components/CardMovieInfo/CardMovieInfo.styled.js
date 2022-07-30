import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
  background-color: #2045eb;
  transition: color 300ms linear;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active) {
    color: #fff;
  }
`;
