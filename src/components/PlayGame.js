import Container from "react-bootstrap/esm/Container"
import NavbarDefault from "./Navbar"
import Card from 'react-bootstrap/Card';
import PlayerCard from "./PlayerCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionCard from "./QuestionCard";
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function PlayGame({users}){

    // console.log(users[1])
    
    // users.forEach((user)=>{
    //     console.log(user)
       
    // })

    







    return(
        <>
        
        <div className="holder d-flex">
            
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
            <h1 className='questionTitle'>Question #1:</h1>
                <QuestionCard />
                <h3 className="round">Round 1</h3>
                <h4 className="turn">User 1's Turn</h4>
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