import { Routes,Route } from 'react-router-dom' 
import useLocalStorage from './hooks/useLocalStorage'
import CreatePage from "./components/CreatePage/CreatePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EditPage from "./components/EditPage/EditPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import MyPetsPage from "./components/MyPetsPage/MyPetsPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LogoutPage from "./components/LogoutPage";
import AuthContext from "./contexts/AuthContext";

const initialAuthState = {
  email: '',
 _id: '', 
 accessToken: '' 
};

function App() {
  const [userInfo, setUserInfo] = useLocalStorage('user',initialAuthState);

  const login = (authData) => {
      setUserInfo(authData)    
  }

  const onLogout = () => {
      setUserInfo(initialAuthState)
  }

  return (
       <AuthContext.Provider value={{userInfo, login, onLogout}}>
       <div id="container">
        
        <Header />
        
        <main id="site-content">

        <Routes>

          <Route path="/dashboard/*" element={<DashboardPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
             
          <Route path="/details/:petID" element={<DetailsPage />} />

          <Route path="/create" element={<CreatePage />} />

          <Route path="/edit" element={<EditPage />} />

          <Route path="/my-pets" element={<MyPetsPage />} />

          <Route path="/logout" element={<LogoutPage />} />

        </Routes>

        </main>

        <Footer />
        
    </div>
    </AuthContext.Provider>
  );
}

export default App;
