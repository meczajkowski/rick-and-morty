import useCharacters from "../../../api/hooks/queries/useCharacters";

const CharacterListStatus = () => {
  const { isPending, error, characters } = useCharacters();

  if (isPending)
    return <p className="character-list__no-results">Loading...</p>;
  if (error)
    return (
      <p className="character-list__no-results">
        An error has occurred: {error.message}
      </p>
    );
  if (!characters && !isPending && !error)
    return <p className="character-list__no-results">No characters found.</p>;
};

export default CharacterListStatus;
