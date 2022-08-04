import Header from "./Header";
import InitialForm from "./InitialForm";


import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

function GameInit({start, save}) {
  return (
    <>
    <Container fluid="sm">
      <img className="trivia_img" src = "https://flamingtext.com/net-fu/proxy_form.cgi?script=water-logo&text=CTC+Trivia&_loc=generate&imageoutput=true"/>
    {/* <img className="trivia_img" src="https://upload.wikimedia.org/wikipedia/en/2/27/Trivia.png" /> */}
    <InitialForm save={save} start={start}/>
    <br></br>
    <br></br>
    <br></br>
    </Container>
    </>
  );
}

export default GameInit;
