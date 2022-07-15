import MyPetList from "../MyPetList/MyPetList"

const MyPetsPage = () => {
    return ( 
    <section id="my-pets-page" className="my-pets">
    <h1>My Pets</h1>
    {/* <ul className="my-pets-list"> */}
                <MyPetList/>
            
    {/* </ul> */}
    </section>)
}

export default MyPetsPage