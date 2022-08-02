import Container from "react-bootstrap/esm/Container"
import NavbarDefault from "./Navbar"
import Card from 'react-bootstrap/Card';
import PlayerCard from "./PlayerCard";


function PlayGame(){
    return(
        <>
        <NavbarDefault />
        <Container fluid>
            <h1>Testing</h1>
            <PlayerCard className="card2" />
            <PlayerCard />
        </Container>
        </>
    )
}

export default PlayGame