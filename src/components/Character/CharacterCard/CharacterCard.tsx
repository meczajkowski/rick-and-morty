import { type Character } from "rickmortyapi";
import "./CharacterCard.css";
import { Link } from "react-router";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Link to={`/character/${character.id}`}>
      <figure className="character-card">
        <img
          src={character.image}
          alt={`Portrait photo of ${character.name}`}
          className="character-card__image"
        />
        <figcaption className="character-card__caption">
          <h2 className="character-card__name">{character.name}</h2>
          <p className="character-card__species">{character.species}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default CharacterCard;
