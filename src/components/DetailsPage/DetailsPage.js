import { useParams, useNavigate,Link } from "react-router-dom"
import * as petService from '../../services/PetService'
import { useState,useEffect,useContext } from "react";
import AuthContext from '../../contexts/AuthContext'

const DetailsPage = () => {
    const navigate = useNavigate();
    const { userInfo } = useContext(AuthContext)
    let { petID } = useParams();
    const [pet, setPet] = useState({});

    const onDeleteHandler = (e) => {
        e.preventDefault();
        if (window.confirm("Do you want to delete this pet") == true) {
        petService.destroy(petID, userInfo.accessToken)
            .then(() => {
                navigate('/dashboard')
            })
    }}

    const onEditHandler = () => {
        console.log("!")

    }
    useEffect(() => {
        petService.getOne(petID)
            .then(result => {
                setPet(result)
        })
    },[petID]);
    
    return <section id="details-page" className="details">
    <div className="pet-information">
        <h3>Name: {pet.name}</h3>
        <p className="type">Type: {pet.name}</p>
        <p className="img"><img src={pet.imageUrl}/></p>
        <div className="actions">
            {userInfo._id && (pet._ownerId == userInfo._id
            ? [<Link className="button" to="/edit/" onClick={onEditHandler}>Edit</Link>,
              <a className="button" href="#" onClick={onDeleteHandler}>Delete</a>]
            : <a className="button" href="#" onClick={""}>Like</a>)}
            
            
            <div className="likes">
                <img className="hearts" src="/images/heart.png" />
                <span id="total-likes">Likes: {pet.likes?.length}</span>
            </div>
            
        </div>
    </div>
    <div className="pet-description">
        <h3>Description:</h3>
        <p>{pet.description}</p>
    </div>
</section>
}

export default DetailsPage