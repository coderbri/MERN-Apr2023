import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import HeaderStyled from './components/styles/Header.styled'
import Button from './components/styles/Button.styled';
import SwitchLightDarkModeBtn from './components/styles/SwitchLightDarkModeBtn.styled';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  
  useEffect(() => {
      const root = document.documentElement;
      root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
  }
  
  return (
    <>
      <HeaderStyled isDarkMode={isDarkMode} h1Child={<a href="/">D20 MERN Auth</a>}>
        <nav className='flex justify-center items-center gap-4'>
          <SwitchLightDarkModeBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Button>Login</Button>
        </nav>
      </HeaderStyled>
      
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<RegisterForm isDarkMode={isDarkMode} />} />
          <Route path='/login' element={<LoginForm isDarkMode={isDarkMode} />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
