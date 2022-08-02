import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

import Header from "./Header";

function InitialForm() {

  const [ player1Name, setPlayer1Name ] = useState("")
  const [ player1Image, setPlayer1Image ] = useState("")

  return (
    <>
    <Container fluid="sm">

      <Form>
      <Form.Group className = "formStyling">
      <br></br>
 
      
      <h1 className="instruction">Instructions:</h1>
      <p>Welcome to cracking the code! A game developed by developers, for developers. A place to put to use all of those little tidbits of trivia that you've been subconciously gathering over the past decade. Please start by inputting the 4 players in below: </p>
      
        <h4>Player 1:</h4>
        <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your name" 
                        onChange={e => {
                          setPlayer1Name(e.target.value)
                          console.log(player1Name)
                        }}/>
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" />
        </Form.Group>
        <br></br>

        <Form.Group>
        <h4>Player 2:</h4>
        <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your name" />
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" />
        </Form.Group>
        <br></br>

        <Form.Group>
        <h4>Player 3:</h4>
        <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your name" />
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" />
        </Form.Group>
        <br></br>

        <Form.Group>
        <h4>Player 4:</h4>
        <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your name" />
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" />
        </Form.Group>
        <br></br>

        
        
        
        <Button className="text-center" variant="primary" type="submit">
           Enter if you dare!
        </Button>
      </Form>
     </Container>
    </>
  );
}

export default InitialForm;
