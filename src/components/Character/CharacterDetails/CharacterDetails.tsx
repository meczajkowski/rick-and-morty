import useCharacter from "../../../api/useCharacter";
import "./CharacterDetails.css";
import { Character } from "rickmortyapi";
import { Link } from "react-router";

const CharacterDetails = ({
  characterId,
}: {
  characterId: Character["id"];
}) => {
  const { isPending, error, character } = useCharacter(characterId);

  console.log(character?.episode);
  if (isPending) {
    return (
      <section className="character-details">
        <div className="character-details__loading" role="status">
          Loading...
        </div>
      </section>
    );
  }

  if (error || !character) {
    return (
      <section className="character-details">
        <div className="character-details__error" role="alert">
          <h1>Error loading character</h1>
          <Link to="/" className="button">
            Go Back
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="character-details">
      <nav className="character-details__navigation">
        <Link to="/" className="button character-details__back-button">
          ← Back
        </Link>
      </nav>

      <figure className="character-details__content">
        <img
          className="character-details__image"
          src={character.image}
          alt={`Portrait of ${character.name}`}
        />

        <figcaption className="character-details__info">
          <header>
            <h1 className="character-details__name">{character.name}</h1>
            <p className="character-details__status">
              <span
                className={`character-details__status-indicator character-details__status-indicator--${character.status.toLowerCase()}`}
                aria-hidden="true"
              />
              <span className="character-details__status-text">
                {character.status} - {character.species}
              </span>
            </p>
          </header>

          <section className="character-details__section">
            <h2 className="character-details__section-title">
              Last known location:
            </h2>
            <p className="character-details__section-content">
              {character.location.name}
            </p>
          </section>

          <section className="character-details__section">
            <h2 className="character-details__section-title">Origin:</h2>
            <p className="character-details__section-content">
              {character.origin.name}
            </p>
          </section>

          <section className="character-details__section">
            <h2 className="character-details__section-title">Gender:</h2>
            <p className="character-details__section-content">
              {character.gender}
            </p>
          </section>
        </figcaption>
      </figure>
    </section>
  );
};

export default CharacterDetails;
