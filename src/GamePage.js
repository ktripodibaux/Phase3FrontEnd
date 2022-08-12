import GameInit from "./components/GameInit";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";


import ExperimentalFooter from "./components/ExperimentalFooter";
import NavbarDefault from "./components/Navbar";
import PlayGame from "./components/PlayGame";

function GamePage() {

  const [gameStarted, setGameStarted] = useState(false)
  const [users, setUsers] = useState([])
  

  function handleGameStart(){
    setGameStarted(true)
  }

  // useEffect(()=>{
  //   console.log(users)
  // })

 ////////////Drop fetch here and assign ///////////////

//  const fetchUsers = () => {
//   fetch("http://localhost:4001/users")
//     .then(res => res.json())
//     .then(data => setUsers(data))
//  }
//   useEffect(fetchUsers, [])

// function getIdOfUser(user){
//   fetch("http://localhost:4001/users")
//     .then(res => res.json())
//     .then(data => {
//       data.forEach((u)=>{
//         if (user.name == u.name){
//           return u.id
//         }
//       })
//     })
// }

  /////////////////////////////////////


  function savePlayers(input){
    const dImage = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
    const dName= "User"
    
    let player1Score = 0
    let player2Score = 0
    let player3Score = 0
    let player4Score = 0


    const user1 = {
      name: input.player1Name ? input.player1Name : "Player 1",
      image:  input.player1Picture ? input.player1Picture : dImage,
      score: player1Score

    }
    
    const user2 = {
      name: input.player2Name ? input.player2Name : "Player 2",
      image: input.player2Picture ? input.player2Picture : dImage,
      score: player2Score
    }
    const user3 = {
      name: input.player3Name ? input.player3Name : "Player 3",
      image: input.player3Picture ? input.player3Picture : dImage,
      score: player3Score
    }
    const user4 = {
      name: input.player4Name ? input.player4Name : "Player 4",
      image: input.player4Picture ? input.player4Picture : dImage,
      score: player4Score
    }
    
    updateUsers([user1, user2, user3, user4])
    console.log("player1Score", player1Score)
  }
  
  
  function updateUsers(array){
    setUsers(array)
  }
  
  return (
    <>
    <NavbarDefault />

      {gameStarted ? <PlayGame  users={users} updateUsers={updateUsers}/> : <GameInit save={savePlayers} start={handleGameStart}/>}


    <ExperimentalFooter/>
    </>
  );
}

export default GamePage;
