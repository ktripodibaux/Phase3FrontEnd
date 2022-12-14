import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function QuestionCard({arrayOfQuestionNumbers, handleScore, handleWrong}){

    console.log("Are the props being passed?", arrayOfQuestionNumbers[0])
    
    const [question, setQuestions] = useState([])
    const [answers , setAnswers] = useState([])
    const [start, setStart] = useState(false)
    
    const [x , setX] = useState(0)


    function handleStart(){
        setStart(true)
    }

    useEffect(()=>{
        //for (let i = 0; i < arrayOfQuestionNumbers.length; i++) {
        
            //const arrayReturn = arrayOfQuestionNumbers[i]
            
            //console.log(arrayReturn)
        // function questionNumber(){
        // //    arrayOfQuestionNumbers.map()
        // let something = []
        //     const anotherThing = arrayOfQuestionNumbers[i]
        // for (let i of arrayOfQuestionNumbers) {
        //     i++
        //     return 
        // }
            // let i = 0
        // for (i of arrayOfQuestionNumbers) {
        //}    
        
    fetch(`http://localhost:9292/questions/${arrayOfQuestionNumbers[x]}`) 
        .then(res => res.json())
        .then(data => setQuestions(data))
        //.then(data => data.incorrect_answer.split(','))
        //.then (data => setAnswers(data))
       
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
            setAnswers(all_answers, arrayOfQuestionNumbers)
        })
    
      },[question.incorrect_answer, x])

    const handleClick = (event) => {
        handleStart()
        if (event.target.value === question.correct_answer){
            handleScore()
            setX(x + 1)
        // fetch("http://localhost:9292/users/17", {
        //     method: "PATCH",
        //     headers: {
        //       "Content-type": "application/json"
        //     },
        //     body: JSON.stringify()
        //   })
        //    .then(response => {
        //       console.log(response.status); 
        //       return response.json();
        //     })
        //     .then(data => console.log(data));
        }
        //Write some code to see if answer was correct_answer

        // if (BUTTON CLICKED == question.correct_answer){
        //     POST TO THE SERVER INCREASING THAT USERS SCORE WHICH INCREASES ON THE GAMEPAGE AND LEADERBOARD 
        //     MOVES ON TO THE NEXT PLAYER
          else {
            handleWrong()
            alert("Continue to develop your developer skills, Developer. You're wrong.")
            
         }
        
        //fetchQuestion()
    }


    const QuestionAnswers = answers.map((each) => {
        console.log(each)
        return(
            <Button variant="primary" onClick={handleClick} value={each}>{each}</Button>
        )
    })
    const increaseX = ()=>{
        setX(x + 1)
    }
    
    console.log(x)

    const button = <Button variant="primary" onClick={increaseX} >Start</Button>
   

    
    return (
        <>  
        
        <Card>
            <Card.Title ></Card.Title>
            <Card.Body>
            <Card.Text className='question'>
          {question.question}
            </Card.Text>
            <div className='answers'>
                {QuestionAnswers}

              

                {start ? null : button}
            </div>
        </Card.Body>
        </Card>
        </>
    )
}

export default QuestionCard