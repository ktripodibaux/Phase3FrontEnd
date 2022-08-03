import Container from "react-bootstrap/esm/Container"
import NavbarDefault from "./Navbar"
import ResultCard from "./ResultCard"


function Leaderboard(){


    return(
        <>
        <NavbarDefault />
        <Container >
        <h1 className="questionTitle">Highest scoring players</h1>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />



        </Container>
        
        
        </>
    )

}

export default Leaderboard