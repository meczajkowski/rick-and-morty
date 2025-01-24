import { useState } from "react";
import { Character } from "rickmortyapi";
import useCharacters from "./useCharacters";

const filterCharacters = (characters: Character[], query: string) => {
  if (!query.trim()) return characters;

  return characters.filter((character) =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );
};

const useFilteredCharacters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { characters, isPending, error } = useCharacters();

  const filteredCharacters = characters
    ? filterCharacters(characters, searchQuery)
    : [];

  return {
    characters: filteredCharacters,
    isPending,
    error,
    searchQuery,
    setSearchQuery,
    noResults: (characters && filteredCharacters.length === 0) || false,
  };
};

export default useFilteredCharacters;
