
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function QuestionCard(){
    return (
        <>
        {/* className="col-sm-6 p-3 mb-2 bg-danger text-white userCard" */}
        <Card>
            <Card.Title ></Card.Title>
            <Card.Body>
            <Card.Text className='question'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?
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