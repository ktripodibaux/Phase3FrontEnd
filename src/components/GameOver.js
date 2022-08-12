import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Routes, Route, useNavigate} from 'react-router-dom';



function GameOver({winner}){

    console.log(winner)

    const navigate = useNavigate();
    const navigateToLeaderboard = () => {
        // 👇️ navigate to /contacts
        navigate('/leaderboard');
      };

      const navigateHome = () => {
        // 👇️ navigate to /
        window.location.reload()
      };


    return (
        <>
        <Container>
            <div className="screen">
            
            <div id="tudo">

	<div class="gameover">
	<p> GAME </p>
	<p> OVER </p>
	</div>

    
    <div class="continue">
    <p>Winner: {winner.name}</p>
    <p>Score: {winner.score}</p>
	 <p> CONTINUE? </p>
     </div>

	<div class="opcoes">
		<div class="yes"> <a onClick={navigateHome}> YES </a> </div>
		<div class="no"> <a onClick={navigateToLeaderboard}> NO </a> </div>
	</div>

</div>
            </div>
        </Container>
        </>
    )
}

export default GameOver