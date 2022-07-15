import { useEffect, useState, useContext } from "react"
import { getAll } from "../../services/PetService"
import PetCard from "../DashboardPage/PetCard";
import AuthContext from "../../contexts/AuthContext";

const MyPetList = () => {
    const [pets, setPets] = useState([]);
    const {userInfo} = useContext(AuthContext)
    useEffect(() => {
        getAll()
            .then(result => {
                setPets(result.filter(pet => pet._ownerId === userInfo._id ));
        })
    },[userInfo._id]);
    
    return (
    <>
        {pets.length > 0
        ?(
            <ul className="other-pets-list">
            {pets.map(pet => <PetCard key={pet._id} petObj={pet} />)}
            </ul>
        )
        : <p className="no-pets">No pets in database!</p>
    }
        </>
    
    )
}

export default MyPetList;