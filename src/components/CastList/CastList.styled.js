import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  margin-top: 30px;
`;

