import { Character } from "rickmortyapi";
import useCharacters from "./queries/useCharacters";
import usePagination from "./usePagination";

const filterCharacters = (characters: Character[], query: string) => {
  if (!query.trim()) return characters;

  return characters.filter((character) =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );
};

const useFilteredCharacters = (searchQuery: string) => {
  const { currentPage, handlePageChange } = usePagination();

  const { characters, isPending, error, pagination } =
    useCharacters(currentPage);

  const filteredCharacters = characters
    ? filterCharacters(characters, searchQuery)
    : [];

  return {
    characters: filteredCharacters,
    isPending,
    error,
    noResults: (characters && filteredCharacters.length === 0) || false,
    pagination: {
      currentPage,
      totalPages: pagination.totalPages,
      hasNextPage: pagination.hasNextPage,
      hasPrevPage: pagination.hasPrevPage,
      onNextPage: () => handlePageChange(currentPage + 1),
      onPrevPage: () => handlePageChange(currentPage - 1),
      onPageSelect: handlePageChange,
    },
  };
};

export default useFilteredCharacters;
