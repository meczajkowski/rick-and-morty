import CharacterList from "../../components/Character/CharacterList/CharacterList";
import Container from "../../components/ui/Container/Container";

function Home() {
  return (
    <Container>
      <main className="home-page">
        <h1>Hello World</h1>
        <CharacterList />
      </main>
    </Container>
  );
}

export default Home;
