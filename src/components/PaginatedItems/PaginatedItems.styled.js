import ReactPaginate from 'react-paginate';

import styled from 'styled-components';

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin: 20px;

  .break-link {
    font-size: 24px;
  }

  .page-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #ccc9c6;
    margin-left: 5px;
    cursor: pointer;
  }

  .page-btn:hover {
    background-color: #ff6b08;
  }

  .page-btn.active {
    background-color: #ff6b08;
  }
`;