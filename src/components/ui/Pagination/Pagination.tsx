import "./Pagination.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  onPageSelect: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  onNextPage,
  onPrevPage,
  onPageSelect,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={onPrevPage}
        disabled={!hasPrevPage}
      >
        Previous
      </button>

      <div className="pagination__pages">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination__page ${
              currentPage === page ? "pagination__page--active" : ""
            }`}
            onClick={() => onPageSelect(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination__button"
        onClick={onNextPage}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
