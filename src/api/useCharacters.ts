import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "rickmortyapi";

const useCharacters = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const characters = data?.data.results;
  return { isPending, error, data, characters };
};

export default useCharacters;
