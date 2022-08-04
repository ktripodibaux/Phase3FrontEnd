import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResultCard({user}){

    console.log(user)

    return(
        <Card className='leadercard'>
            
            <Row>
                <Col><CardImg src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' /></Col>
                <Col>{user.name}</Col>
                <Col><Card.Body>Score: {user.score}</Card.Body></Col>
            </Row>
            {/* <CardImg src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' />
          <Card.Body>This is some text within a card body.</Card.Body> */}
        </Card>
    )
}

export default ResultCard