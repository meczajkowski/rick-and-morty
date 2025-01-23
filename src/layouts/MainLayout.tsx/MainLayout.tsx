import { Outlet } from "react-router";
import Container from "../../components/ui/Container/Container";
import logo from "../../assets/rmlogo.svg";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <Container>
      <main className="main-layout">
        <h1 className="main-layout__title">
          <img src={logo} alt="Rick and Morty Characters" />
        </h1>
        <Outlet />
      </main>
    </Container>
  );
};

export default MainLayout;
