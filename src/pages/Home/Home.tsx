import { useState } from "react";
import CharacterList from "../../components/Character/CharacterList/CharacterList";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import Pagination from "../../components/ui/Pagination/Pagination";
import useFilteredCharacters from "../../api/hooks/useFilteredCharacters";
import useSearchForm from "../../hooks/useSearchForm";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchValue, handleSubmit, handleChange } = useSearchForm({
    onSearch: setSearchQuery,
  });

  const { characters, noResults, pagination } =
    useFilteredCharacters(searchQuery);

  return (
    <>
      <form onSubmit={handleSubmit} className="home__form">
        <SearchInput
          value={searchValue}
          onChange={handleChange}
          placeholder="Search characters..."
        />
        <button type="submit">Search</button>
      </form>

      <CharacterList
        characters={characters}
        searchQuery={searchQuery}
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
