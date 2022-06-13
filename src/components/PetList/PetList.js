import { useEffect, useState } from "react"
import { getAll } from "../../services/petService"
import PetCard from "../DashboardPage/PetCard";


const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setPets(result);
        })
    },[]);
    console.log(pets)
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

export default PetList;