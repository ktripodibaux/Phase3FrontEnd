import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"
import NavbarDefault from "./Navbar"
import PlayerCard from "./PlayerCard"
import ResultCard from "./ResultCard"


function Leaderboard(){

    const [users, setUsers] = useState(undefined)

    useEffect(()=>{
        fetch('http://localhost:9292/results').then(res=>res.json()).then(data=>setUsers(data))
    },[])

    // const resultCards = users.forEach(user=>{
    //     return <PlayerCard user={user} />
    // })

    let usersArray = []

    if (users){
        for (let i = 0; i < users.length; i++){
            usersArray.push(<ResultCard user={users[i]} />)
        }
    }
    
    return(
        <>
        <NavbarDefault />
        <Container fluid="sm">
        <h1 className="questionTitle">Highest scoring players</h1>
            {users ? usersArray : undefined}



        </Container>
        
        
        </>
    )

}

export default Leaderboard