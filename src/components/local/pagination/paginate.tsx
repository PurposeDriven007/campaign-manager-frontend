import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationContent,
} from "./pagination";

export function Paginate(props: { length: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;

  const totalPages = Math.ceil(props.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }}
          />
        </PaginationItem>
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => handlePageChange(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {currentPage < totalPages && (
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
