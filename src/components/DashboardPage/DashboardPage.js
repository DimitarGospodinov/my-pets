import PetCard from "./PetCard"
import { getAll } from "../../services/petService"
import { useEffect, useState } from "react"

const DashboardPage = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setPets(result);
        })
    },[]);
    console.log(pets)

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
    
            <ul className="other-pets-list">
                {pets.map(pet => <PetCard key={pet._id} petObj={pet} />)}
            </ul>
    
            <p className="no-pets">No pets in database!</p>
        </section>
    )
  
}

export default DashboardPage