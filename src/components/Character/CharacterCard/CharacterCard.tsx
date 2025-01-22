import { type Character } from "rickmortyapi";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
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
  );
};

export default CharacterCard;
