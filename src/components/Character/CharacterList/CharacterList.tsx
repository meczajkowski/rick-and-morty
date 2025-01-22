import { Character } from "rickmortyapi";
import CharacterCard from "../CharacterCard/CharacterCard";
import useCharacters from "../../../api/useCharacters";
import "./CharacterList.css";
import Container from "../../ui/Container/Container";

const CharacterList = () => {
  const { isPending, error, characters } = useCharacters();

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  if (!characters) return <p>No characters found</p>;
  return (
    <Container>
      <ul className="character-list">
        {characters.map((character: Character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CharacterList;
