import GameInit from "./components/GameInit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GamePage() {
  return (
    <Container>
      {gamecondition ? {<Game /> : <GameInit />}
    </Container>
  );
}

export default GamePage;
