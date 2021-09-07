import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

const Pagination = ({ totalRecord, currentPage, handlePageChange }) => {
  const forcePage = useMemo(() => currentPage && currentPage - 1, [currentPage])

  if (!totalRecord) return null

  return (
    <div className="pag-wrapper">
      <ReactPaginate
        breakLabel="..."
        pageCount={Math.ceil(totalRecord / 10)}
        forcePage={forcePage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={({ selected }) => handlePageChange(selected + 1)}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        breakLinkClassName="page-link page-ellipsis"
      />
    </div>
  )
}

Pagination.propTypes = {
  totalRecord: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
}

export default Pagination
