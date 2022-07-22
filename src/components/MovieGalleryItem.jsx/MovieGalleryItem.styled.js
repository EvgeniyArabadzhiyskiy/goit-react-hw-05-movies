import styled from 'styled-components';

const Item = styled.li`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 4px;

  h3{
    margin-left: 20px;
  }

  img {
    width: 100%;
    object-fit: cover;
    transition: transform 300ms linear;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export default Item;
