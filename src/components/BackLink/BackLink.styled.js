import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #2045eb;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: orangered;
    color: white;
  }
`;
