
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function PlayerCard(){
    return (
        <>
        <Card className="col-sm-1 p-3 mb-2 bg-danger text-white">
            <Image className='user img-thumbnail' v-bind="mainProps" variant="right" rounded alt="Rounded image"  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"></Image>
            <Card.Text className="test">SamThemadman</Card.Text>
            <Card.Text className="test">Score: </Card.Text>
        </Card>
        </>
    )
}

export default PlayerCard