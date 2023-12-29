import { useState } from 'react';
import DisplayShows from './components/DisplayShows';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateShowForm from './components/CreateShowForm';
import HeaderStyled from './components/styles/Header.styled';

function App() {
  const [ tvShows, setTvShows ] = useState([]); // our state is an array of objects
  
  return (
    <>
      <HeaderStyled>
        <h1 className='text-4xl font-bold text-center'>D15: Starting Full-Stack MERN</h1>
      </HeaderStyled>
      
      <div className='container mx-auto'>
        <BrowserRouter>
          
          <div className="flex justify-center gap-2">
            <Link to={"/create/show/form"}>Add Show Form</Link>
            <Link to={'/'}>Home</Link>
          </div>
          
          <Routes>
            <Route path='/' element={<DisplayShows tvShowsList={tvShows} setTvShowsList={setTvShows} />} />
            <Route path='/create/show/form' element={<CreateShowForm />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App