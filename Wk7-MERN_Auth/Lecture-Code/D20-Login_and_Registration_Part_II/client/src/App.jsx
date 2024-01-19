import HeaderStyled from './components/styles/Header.styled'
import Button from './components/styles/Button.styled';
import SwitchLightDarkModeBtn from './components/styles/SwitchLightDarkModeBtn.styled';
import { useState, useEffect } from 'react';

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
        <nav className='flex justify-center items-center gap-4 mt-4 sm:mt-0'>
          <p>Link</p>
          <p>Link</p>
          <SwitchLightDarkModeBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Button>Login</Button>
        </nav>
      </HeaderStyled>
      
      <div className="container mx-auto">
        <h2>Hello World</h2>
      </div>
    </>
  )
}

export default App
