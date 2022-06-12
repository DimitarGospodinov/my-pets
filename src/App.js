import { isAuthenticated } from "./services/authService";
import { Routes,Route } from 'react-router-dom' 
import { useState, useEffect} from 'react'
import * as authService from './services/authService'

import CreatePage from "./components/CreatePage/CreatePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EditPage from "./components/EditPage/EditPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import MyPetsPage from "./components/MyPetsPage/MyPetsPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";


function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated:false, username: ''});

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })
    
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });
  }

  return (
       <div id="container">
        
        < Header {...userInfo}/>
        
        <main id="site-content">

        <Routes>
          <Route path="/" element={<DashboardPage />} />

          <Route path="/login" element={<LoginPage onLogin={onLogin}/>} />

          <Route path="/register" element={<RegisterPage />} />
             
          <Route path="/details" element={<DetailsPage />} />

          <Route path="/create" element={<CreatePage />} />

          <Route path="/edit" element={<EditPage />} />

          <Route path="/my-pets" element={<MyPetsPage />} />
        </Routes>

        </main>

        <Footer />

    </div>
  );
}

export default App;
