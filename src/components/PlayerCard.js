
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function PlayerCard({user, type}){

//    console.log(user)

    let style;

    if (type === 1){
        style = "primary"
    } else if (type === 2){
        style = "danger"
    }else if (type === 3){
        style = "success"
    }else if (type === 4){
        style = "warning"
    } else{
        style = "info"
    }
    
    
    return (
        <>
        {/* className="col-sm-6 p-3 mb-2 bg-danger text-white userCard" */}
        <Card className={`sm p-3 mb-2 bg-${style} text-white d-lg-flex`} >
            <Image className='user img-thumbnail' v-bind="mainProps" variant="right" rounded alt="Rounded image"  src={user.image}></Image>
            <Card.Text className="test">{user.name ? user.name : "User"}</Card.Text>
            <Card.Text className="test">Score: </Card.Text>
        </Card>
        </>
    )
}

export default PlayerCard