import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HeaderStyled from './components/styles/Header.styled'
import Button from './components/styles/Button.styled';
import SwitchLightDarkModeBtn from './components/styles/SwitchLightDarkModeBtn.styled';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
      const root = document.documentElement;
      root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
  }
  
  const handleUserLogout = () => {
    axios.post('http://localhost:8000/api/logout/user', {}, {withCredentials: true})
      .then((res) => {
        setIsLoggedIn(false);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }
  
  return (
    <>
      <HeaderStyled isDarkMode={isDarkMode} h1Child={<a href="/">D20 MERN Auth</a>}>
        <nav className='flex justify-center items-center gap-4'>
          <SwitchLightDarkModeBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          {/* Conditionally render login/logout button */}
            <Button onClick={isLoggedIn ? handleUserLogout : () => navigate('/login')}
            >{ isLoggedIn ? 'Logout' : 'Login' }</Button>
        </nav>
      </HeaderStyled>
      
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<RegisterForm isDarkMode={isDarkMode} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/login' element={<LoginForm isDarkMode={isDarkMode} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/dashboard' element={ isLoggedIn ? ( <Dashboard isDarkMode={isDarkMode} /> )
            : ( // Redirect to /login if user is not logged in
              <Navigate to='/login' />
            )} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
