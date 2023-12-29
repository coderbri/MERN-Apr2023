import './App.css'
import { useState } from 'react';
import DisplayShows from './components/DisplayShows';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateShowForm from './components/CreateShowForm';

function App() {
  const [ tvShows, setTvShows ] = useState([]); // our state is an array of objects
  
  return (
    <>
      <header>
        <h1>D15: Starting Full-Stack MERN</h1>
      </header>
      
      <div className="container">
        <BrowserRouter>
          
          <Link to={"/create/show/form"}>Add Show Form</Link>  <br />
          <Link to={'/'}>Home</Link>
          
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
