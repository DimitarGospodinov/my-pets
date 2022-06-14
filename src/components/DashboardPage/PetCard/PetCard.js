import {Link} from 'react-router-dom'

const PetCard = (props) => {
    return (<li className="otherPet">
            <h3>Name: {props.petObj.name}</h3>
            <p>Type: {props.petObj.type}</p>
            <p className="img"><img src={props.petObj.imageUrl} alt="" /></p>
            <Link className="button" to={`/details/${props.petObj._id}`}>Details</Link>
        </li>)
}

export default PetCard