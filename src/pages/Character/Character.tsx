import { useParams } from "react-router";
import CharacterDetails from "../../components/Character/CharacterDetails/CharacterDetails";
import Container from "../../components/ui/Container/Container";

const Character = () => {
  const { characterId } = useParams();

  if (!characterId) {
    return (
      <Container>
        <main>
          <div>Character not found</div>
        </main>
      </Container>
    );
  }
  return (
    <Container>
      <main>
        <CharacterDetails characterId={+characterId} />
      </main>
    </Container>
  );
};

export default Character;
