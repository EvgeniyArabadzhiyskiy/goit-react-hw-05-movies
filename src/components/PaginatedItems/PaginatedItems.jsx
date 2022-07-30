import { StyledPagination } from './PaginatedItems.styled';

const PaginatedItems = ({ totalPage, getPage }) => {
  const handlePageClick = event => {
    const currentPage = event.selected + 1;

    getPage(currentPage);
  };

  return (
    <>
      <StyledPagination
        breakLabel="..."
        nextLabel="&raquo;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="&laquo;"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="page-btn"
        previousClassName="page-btn"
        nextClassName="page-btn"
        breakClassName="page-btn break-item"
        breakLinkClassName="break-link"
        activeClassName="active"
      />
    </>
  );
};

export default PaginatedItems;
