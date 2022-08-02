import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarDefault({ props }) {
  return (
    <Navbar bg="primary" variant="dark">
        {/* <Container> */}
          <Navbar.Brand href="#home">Cracking the Code</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/game">Play</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          </Nav>
        {/* </Container> */}
      </Navbar>
  );
}

export default NavbarDefault;
