import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "rickmortyapi";

const useCharacters = (page: number = 1) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharacters({ page }),
  });

  const characters = data?.data.results;
  return {
    isPending,
    error,
    characters,
    pagination: {
      totalPages: data?.data.info?.pages || 0,
      hasNextPage: !!data?.data.info?.next,
      hasPrevPage: !!data?.data.info?.prev,
    },
  };
};

export default useCharacters;
