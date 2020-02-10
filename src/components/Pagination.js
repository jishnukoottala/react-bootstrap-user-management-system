import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginate = props => {
  const { totalPages, currentPage, onChangePage } = props;
  console.log("pages ", props);
  return (
    <Pagination aria-label="Page navigation example ">
      <PaginationItem>
        <PaginationLink
          first
          href="#"
          onClick={() => {
            onChangePage(1);
          }}
        />
      </PaginationItem>
      <PaginationItem disabled={currentPage - 1 < 1 ? true : false}>
        <PaginationLink
          previous
          href="#"
          onClick={() => {
            onChangePage(currentPage - 1);
          }}
        />
      </PaginationItem>
      {[...Array(totalPages).keys()].map(num => (
        <PaginationItem
          key={num}
          active={num + 1 === currentPage ? true : false}
        >
          <PaginationLink
            href="#"
            onClick={() => {
              onChangePage(num + 1);
            }}
          >
            {num + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={currentPage + 1 > totalPages ? true : false}>
        <PaginationLink
          next
          href="#"
          onClick={() => {
            if (currentPage + 1 > totalPages) {
              onChangePage(totalPages);
            } else {
              onChangePage(currentPage + 1);
            }
          }}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          href="#"
          onClick={() => {
            onChangePage(totalPages);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginate;
