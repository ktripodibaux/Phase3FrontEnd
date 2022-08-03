
import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function QuestionCard(){
    
    const [questions, setQuestions] = useState({})

    const fetchQuestions = () => {
    fetch("http://localhost:9292/questions")
        .then(res => res.json())
        .then(data => setQuestions(data))
    }
    useEffect(fetchQuestions, [])

    // :) lol


    //Random number generator for the question ID

    const questionID = [];
   
    const generateQuestionID = () => {
        let questionID = Math.floor(Math.random() * 41)
        console.log(questionID)
        return questionID
    }
        
    
    
    return (
        <>
        {/* className="col-sm-6 p-3 mb-2 bg-danger text-white userCard" */}
        {generateQuestionID()}
        <Card onClick={generateQuestionID}>
            <Card.Title >Question #{questionID} </Card.Title>
            <Card.Body>
            <Card.Text className='question'>
                Loren ipsum for now
            {/* {questions[questionID].question} */}
            </Card.Text>
            <div className='answers'>
                <Button variant="primary">Answer</Button>
                <Button variant="primary">Answer</Button>
                <Button variant="primary">Answer</Button>
                <Button variant="primary">Answer</Button>
            </div>
        </Card.Body>
        </Card>
        </>
    )
}

export default QuestionCard