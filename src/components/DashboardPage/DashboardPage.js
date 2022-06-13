
import { Route, Routes, Link } from "react-router-dom"
import PetList from "../PetList/PetList"
const DashboardPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <nav>
                <Link to="types">Types</Link>
                
            </nav>
            <section>
            <Routes>
                    <Route path="/" element={<PetList/>} />
                    <Route path="/types" element= {<p>Types ...</p>} />
                </Routes>
            </section>

            </section>
    )
  
}

export default DashboardPage