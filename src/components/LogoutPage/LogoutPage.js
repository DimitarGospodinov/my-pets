import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService'
import AuthContext from '../../contexts/AuthContext';
import { useContext, useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate();
    const {userInfo, onLogout} = useContext(AuthContext)
    useEffect(() => {
        authService.logout(userInfo.accessToken)
    .then(() => {
        navigate('/dashboard')
    })
    
    }, [])
    onLogout();
    return null;
    }


export default Logout;