import { useState } from 'react';
import DisplayShows from './components/DisplayShows';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateShowForm from './components/CreateShowForm';
import HeaderStyled from './components/styles/Header.styled';
import Button from './components/styles/Button.styled';

function App() {
  const [ tvShows, setTvShows ] = useState([]); // our state is an array of objects
  
  return (
    <>
      <BrowserRouter>
      
        <HeaderStyled>
          <h1 className='text-4xl font-bold text-center'>D15: Starting Full-Stack MERN</h1>
          
          <nav className="flex justify-center gap-4 mt-4 lg:mt-0">
            <Link to={'/'}>
            <Button>Home</Button>
            </Link>
            <Link to={"/create/show/form"}>
              <Button>+ Add Show Form</Button>
            </Link>
          </nav>
        </HeaderStyled>
        
        <div className='container mx-auto'>
          
          <Routes>
            <Route path='/' element={<DisplayShows tvShowsList={tvShows} setTvShowsList={setTvShows} />} />
            <Route path='/create/show/form' element={<CreateShowForm />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  )
}

export default App