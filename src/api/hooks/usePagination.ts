import { useSearchParams } from "react-router";
import { useEffect } from "react";

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  useEffect(() => {
    if (!searchParams.has("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  return {
    currentPage: page,
    handlePageChange: (newPage: number) => {
      setSearchParams({ page: newPage.toString() });
    },
  };
};

export default usePagination;
