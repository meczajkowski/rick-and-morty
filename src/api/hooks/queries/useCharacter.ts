import { useQuery } from "@tanstack/react-query";
import { type Character, getCharacter } from "rickmortyapi";

const useCharacter = (id: Character["id"]) => {
  if (!id) throw new Error("Character ID is required");

  const { isPending, error, data } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
  });

  const character = data?.data;
  return { isPending, error, data, character };
};

export default useCharacter;
