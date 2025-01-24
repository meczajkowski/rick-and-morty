import { useParams } from "react-router";
import CharacterDetails from "../../components/Character/CharacterDetails/CharacterDetails";

const Character = () => {
  const { characterId } = useParams();

  if (!characterId) {
    return <div>Character not found</div>;
  }
  return <CharacterDetails characterId={+characterId} />;
};

export default Character;
