import { useState } from "react";
import CharacterList from "../../components/Character/CharacterList/CharacterList";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import useFilteredCharacters from "../../api/useFilteredCharacters";
import useSearchForm from "../../hooks/useSearchForm";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { characters, noResults } = useFilteredCharacters(searchQuery);

  const { searchValue, handleSubmit, handleChange } = useSearchForm({
    onSearch: setSearchQuery,
  });

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
    </>
  );
}

export default Home;
