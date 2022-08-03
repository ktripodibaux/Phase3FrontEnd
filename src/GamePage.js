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

    const user1 = {
      name: input.player1Name,
      image:  input.player1Picture ? input.player1Picture : dImage
    }
    const user2 = {
      name: input.player2Name,
      image: input.player2Picture ? input.player2Picture : dImage
    }
    const user3 = {
      name: input.player3Name,
      image: input.player3Picture ? input.player3Picture : dImage
    }
    const user4 = {
      name: input.player4Name,
      image: input.player4Picture ? input.player4Picture : dImage
    }

    setUsers([user1,user2,user3,user4])
  }
  
  return (
    <>
    <NavbarDefault />

      {gameStarted ? <PlayGame users={users} /> : <GameInit save={savePlayers} start={handleGameStart}/>}


    <ExperimentalFooter/>
    </>
  );
}

export default GamePage;
