import Container from "react-bootstrap/esm/Container"
import NavbarDefault from "./Navbar"
import Card from 'react-bootstrap/Card';
import PlayerCard from "./PlayerCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionCard from "./QuestionCard";
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function PlayGame({users, updateUsers}){

    const [playerTurn, setPlayerTurn] = useState(1)
    const [questionTotal, setQuestionTotal] = useState(1)
    const [round, updateRound] = useState(1)


    function handleTurnChange(){
        if (playerTurn === 4) {
            setPlayerTurn(1)
        } else{
            setPlayerTurn(playerTurn + 1)
        }

        setQuestionTotal(questionTotal + 1)

        if (questionTotal == 12){
            //after question 12 round 2
            updateRound(2)
        }
        if(questionTotal == 24){
            //after question 24 round 3
            updateRound(3)
        }
        if(questionTotal == 30){
            //initiate game end after question 30
        }

    }

    

    function raiseUserScore(name){
        // let id;
        fetch('http://localhost:9292/users').then(res=>res.json()).then(data=>{
            // console.log(data)
            for(let i = data.length-4; i < data.length; i++){
                // console.log(data[i].name)
                if (data[i].name == name){
                    // console.log("found", data[i].id)
                    // console.log(data[i].id)
                    // id = data[i].id
                    fetch(`http://localhost:9292/users/${data[i].id}`, {
                        method: 'PATCH',
                        headers: {'Content-type': 'application/json'}
                    })
                }
            }

        })


        const newArray = [...users]
        newArray.forEach(n=>{
            if (n.name == name){
                n.score += 1
            }
        })

        updateUsers(newArray)

    }


    







    return(
        <>
        <div className="holder d-flex">
            {/* <button onClick={handleTurnChange} /> */}
            <button onClick={handleTurnChange} />
            <div className="left ">
            <Container fluid className="m-auto">
                    <Row>
                        <Col className="justify-content-md-center">
                            <PlayerCard type={1} user={users[0]} />
                          
                            <div className="space"></div>
                            <PlayerCard type={2} user={users[1]}/>
                        </Col>
                    </Row>
            
                </Container>
            </div>
            <div className="questionHolder">
                <button onClick={()=>raiseUserScore(users[playerTurn-1].name)}>update current player score</button>
                <button onClick={handleTurnChange}> update turn and question number</button>
            <h1 className='questionTitle'>Question #{questionTotal}:</h1>
                <QuestionCard />
                <h3 className="round">Round {round}</h3>
                <h4 className="turn">User {playerTurn}'s Turn</h4>
            </div>
            <div className="right">
                <Container fluid className="m-auto">
                    <Row>
                        <Col className="justify-content-md-center">
                            <PlayerCard type={3} user={users[2]} />
                            <div className="space"></div>
                            <PlayerCard type={4} user={users[3]} />
                        </Col>
                    </Row>
            
                </Container>
            </div>
            
        </div>
        
        </>
    )
}

export default PlayGame