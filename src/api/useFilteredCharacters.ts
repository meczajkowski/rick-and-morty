import { Character } from "rickmortyapi";
import useCharacters from "./useCharacters";

const filterCharacters = (characters: Character[], query: string) => {
  if (!query.trim()) return characters;

  return characters.filter((character) =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );
};

const useFilteredCharacters = (searchQuery: string) => {
  const { characters, isPending, error } = useCharacters();

  const filteredCharacters = characters
    ? filterCharacters(characters, searchQuery)
    : [];

  return {
    characters: filteredCharacters,
    isPending,
    error,
    noResults: (characters && filteredCharacters.length === 0) || false,
  };
};

export default useFilteredCharacters;
