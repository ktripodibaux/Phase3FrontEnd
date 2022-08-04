
import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function QuestionCard(){
    
    const [question, setQuestions] = useState({})
    const [answers , setAnswers] = useState([])
   

    const fetchQuestion = () => {
    fetch(`http://localhost:9292/questions/1`)
        .then(res => res.json())
        .then(data => setQuestions(data))
        .then(()=>{
            let incorrect_answers = question.incorrect_answer.replaceAll('"', '')
            incorrect_answers = incorrect_answers.replace('[','') 
            incorrect_answers = incorrect_answers.replace(']','')
            incorrect_answers = incorrect_answers.split(',')

            function getMultipleRandom(arr) {
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
                return shuffled
              }
            
            let all_answers = [incorrect_answers[0], incorrect_answers[1], incorrect_answers[2], question.correct_answer]
            all_answers = getMultipleRandom(all_answers)
            setAnswers(all_answers)
        })
    }
    useEffect(fetchQuestion, [])

    const handleClick = () => {
        //Write some code to see if answer was correct_answer

        // if (BUTTON CLICKED == question.correct_answer){
        //     POST TO THE SERVER INCREASING THAT USERS SCORE WHICH INCREASES ON THE GAMEPAGE AND LEADERBOARD 
        //     MOVES ON TO THE NEXT PLAYER
        // } else {
        //     alert("Continue to develop your developer skills, Developer. You're wrong.")
        //     MOVES ON TO THE NEXT PLAYER
        // }

        fetchQuestion()
    }
    
    return (
        <>  
        <Card>
            <Card.Title ></Card.Title>
            <Card.Body>
            <Card.Text className='question'>
            {question.question}
            </Card.Text>
            <div className='answers'>
                <Button variant="primary" onClick={handleClick}>{answers[0]}</Button>
                <Button variant="primary" onClick={handleClick}>{answers[1]}</Button>
                <Button variant="primary" onClick={handleClick}>{answers[2]}</Button>
                <Button variant="primary" onClick={handleClick}>{answers[3]}</Button>
            </div>
        </Card.Body>
        </Card>
        </>
    )
}

export default QuestionCard