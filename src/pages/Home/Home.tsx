import { type Character } from "rickmortyapi";
import useGetCharacters from "../../api/useGetCharacters";

function Home() {
  const { isPending, error, characters } = useGetCharacters();

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1>Hello World</h1>
      {characters &&
        characters.map((character: Character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
          </div>
        ))}
    </div>
  );
}

export default Home;
