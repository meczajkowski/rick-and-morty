import { Character } from "rickmortyapi";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.css";
import CharacterListStatus from "./CharacterListStatus";

type CharacterListProps = {
  characters: Character[];
  searchQuery: string;
  noResults: boolean;
};

const CharacterList = ({
  characters,
  searchQuery,
  noResults,
}: CharacterListProps) => {
  return (
    <>
      <CharacterListStatus />

      {noResults ? (
        <p className="character-list__no-results">
          No characters found matching "{searchQuery}"
        </p>
      ) : (
        <ul className="character-list">
          {characters.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharacterList;
