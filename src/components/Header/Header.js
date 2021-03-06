import {Link} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Header = (
) => {
    const { userInfo } = useContext(AuthContext);

    let guestNavigation = (
    <div id="guest">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button" >Register</Link>
    </div>)
    
    let userNavigation = (
    <div id="user">
        <span>Welcome,{userInfo.email}</span>
        <Link to="/my-pets" className="button" >My Pets</Link>
        <Link to="/create" className="button" >Add Pet</Link>
        <Link to="/logout" className="button" >Logout</Link>
    </div>)
    
    return (<header id="site-header">
            
    <nav className="navbar">
        <section className="navbar-dashboard">
            <Link to="/dashboard">Dashboard</Link>
            
            {userInfo.email
                ?userNavigation
                :guestNavigation 
            }
        </section>
    </nav>
</header>)
}

export default Header