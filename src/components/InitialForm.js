import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

import Header from "./Header";

function InitialForm({start, save}) {

  const [ form, setForm ] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(form)
    start()
    save(form)
    
    //Post the inputted usernames and image URL's to the server
    
    fetch( "http://localhost:9292/users" , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( form )
      } )
      .then( response => response.json() )
      .then( console.log )
  }
  

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
                        value = {form.player1Name}
                        onChange={ e => setField('player1Name', e.target.value)}/>
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" 
                        value = {form.player1Picture}
                        onChange={ e => setField('player1Picture', e.target.value)}/>
        </Form.Group>
        <br></br>

        <Form.Group>
        <h4>Player 2:</h4>
        <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your name" 
                        value = {form.player2Name}
                        onChange={ e => setField('player2Name', e.target.value)}/>
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" 
                        value = {form.player2Picture}
                        onChange={ e => setField('player2Picture', e.target.value)}/>
        </Form.Group>
        <br></br>

        <Form.Group>
        <h4>Player 3:</h4>
        <br></br>
         <Form.Control type="text" 
                        placeholder="Enter your name" 
                        value = {form.player3Name}
                        onChange={ e => setField('player3Name', e.target.value)}/>
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" 
                        value = {form.player3Picture}
                        onChange={ e => setField('player3Picture', e.target.value)}/>
        </Form.Group>
        <br></br>

        <Form.Group>
        <h4>Player 4:</h4>
        <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your name" 
                        value = {form.player4Name}
                        onChange={ e => setField('player4Name', e.target.value)}/>
          <br></br>
          <Form.Control type="text" 
                        placeholder="Enter your picture or avatar" 
                        value = {form.player4Picture}
                        onChange={ e => setField('player4Picture', e.target.value)}/>
        </Form.Group>
        <br></br>

        
        
        
        <Button className="text-center" variant="primary" type="submit" onClick={handleSubmit}>
           Enter if you dare!
        </Button>
      </Form>
     </Container>
    </>
  );
}

export default InitialForm;
