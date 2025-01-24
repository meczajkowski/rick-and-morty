import CharacterList from "../../components/Character/CharacterList/CharacterList";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import useFilteredCharacters from "../../api/useFilteredCharacters";
import "./Home.css";

function Home() {
  const { characters, searchQuery, setSearchQuery, noResults } =
    useFilteredCharacters();

  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search characters..."
      />
      <CharacterList
        characters={characters}
        searchQuery={searchQuery}
        noResults={noResults}
      />
    </>
  );
}

export default Home;
