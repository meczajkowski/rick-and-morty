import { useState } from "react";
import CharacterList from "../../components/Character/CharacterList/CharacterList";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import Pagination from "../../components/ui/Pagination/Pagination";
import useFilteredCharacters from "../../api/hooks/useFilteredCharacters";
import useDebounce from "../../hooks/useDebounce";
import "./Home.css";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useDebounce({
    callback: () => setDebouncedQuery(searchValue),
    delay: 500,
    dependencyList: [searchValue],
  });

  const { characters, noResults, pagination } =
    useFilteredCharacters(debouncedQuery);

  return (
    <>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search characters..."
      />

      <CharacterList
        characters={characters}
        searchQuery={debouncedQuery}
        noResults={noResults}
      />

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        hasNextPage={pagination.hasNextPage}
        hasPrevPage={pagination.hasPrevPage}
        onNextPage={pagination.onNextPage}
        onPrevPage={pagination.onPrevPage}
        onPageSelect={pagination.onPageSelect}
      />
    </>
  );
}

export default Home;
