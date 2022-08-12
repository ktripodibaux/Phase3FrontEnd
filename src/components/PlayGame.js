import Container from "react-bootstrap/esm/Container"
import NavbarDefault from "./Navbar"
import Card from 'react-bootstrap/Card';
import PlayerCard from "./PlayerCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionCard from "./QuestionCard";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect, Navigate, useNavigate } from 'react-router-dom';
import GameOver from "./GameOver";


function PlayGame({users, updateUsers}){

    const [playerTurn, setPlayerTurn] = useState(1)
    const [questionTotal, setQuestionTotal] = useState(1)
    const [round, updateRound] = useState(1)
    const [gameOver, setGameOver] = useState(false)


    function handleTurnChange(){
        if (playerTurn === 4) {
            setPlayerTurn(1)
        } else{
            setPlayerTurn(playerTurn + 1)
            console.log("user score: ", users[0].score)
        }

        

        if (questionTotal == 12){
            //after question 12 round 2
            updateRound(2)

            users.map(user=>{
                console.log("End of game scores: ", user.score)
            })

            console.log("winner: ", findWinner())
                //player1Score
                
                
                
                
            }
            if(questionTotal == 24){
                //after question 24 round 3
                updateRound(3)
            }
            if(questionTotal == 30){
                //initiate game end after question 30\
                
                fetch("http://localhost:9292/results", {
                    method: "POST",
                    headers: {'Content-Type': "application/json"},
                    body: JSON.stringify({
                        player1Name: users[0].name,
                        player1Picture: users[0].image,
                        player1Score: users[0].score,
                        player2Name: users[1].name,
                        player2Picture: users[1].image,
                        player2Score: users[1].score,
                        player3Name: users[2].name,
                        player3Picture: users[2].image,
                        player3Score: users[2].score,
                        player4Name: users[3].name,
                        player4Picture: users[3].image,
                        player4Score: users[3].score
            
                    })
            
                })
            
            
                setGameOver(true)
        
                        //Result.create(name: params[:player1Name], userUrl: params[:player1Picture], score: [:player1Score]).to_json
                    }
    }
    
    
    
    function talkWithQuestionCard(){
        
        handleTurnChange()
        raiseUserScore(users[playerTurn-1].name)
        setQuestionTotal(questionTotal + 1)
    }

    function handleWrongAnswer(){
        handleTurnChange()
    }

    

    function raiseUserScore(name){
        
        fetch('http://localhost:9292/users').then(res=>res.json()).then(data=>{

            for(let i = data.length-4; i < data.length; i++){

                if (data[i].name == name){

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

    const [arrayOfNumbers, setArrayOfNumbers] = useState([])

useEffect(()=> {
    
        fetch(`http://localhost:9292/questions/round/1`)
        .then(r=>r.json())
        .then(data => setArrayOfNumbers(data) )
    
}, [])


    //fetchArrayOfQuestionNumbers(1)
    
    function findWinner(){
        let highest = 0
        let winner

        users.map(user=>{
            if (user.score > highest){
                highest = user.score
                winner = user
            }
        })
        return winner
    }
    
    



    if (gameOver){
      
        return(
            <GameOver winner={findWinner()}  />
        )
    }
    // winnerProps = {winner




    return(
        <>
        <div className="holder d-flex">
            {/* <button onClick={handleTurnChange} /> */}
            {/* <button onClick={handleTurnChange} /> */}
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
                {/* <button onClick={()=>raiseUserScore(users[playerTurn-1].name)}>update current player score</button> */}
                {/* <button onClick={handleTurnChange}> update turn and question number</button> */}
            <h1 className='questionTitle'>Question #{questionTotal}:</h1>
                <QuestionCard handleWrong={handleWrongAnswer} handleScore={talkWithQuestionCard} arrayOfQuestionNumbers = {arrayOfNumbers}/>
                <h3 className="round">Round {round}</h3>
                <h4 className="turn">{users[playerTurn-1].name}'s Turn</h4>
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