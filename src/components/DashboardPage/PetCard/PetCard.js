const PetCard = (props) => {
    return (<li className="otherPet">
            <h3>Name: {props.petObj.name}</h3>
            <p>Type: {props.petObj.type}</p>
            <p className="img"><img src={props.petObj.imageUrl} alt="" /></p>
            <a className="button" href="#">Details</a>
        </li>)
}

export default PetCard