import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import DisplayAllAuthors from './components/DisplayAllAuthors'
import HeaderStyled from './components/styles/Header.styled'

function App() {
  
  const [ authors, setAuthors ] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then((res) => {
        console.log(res);
        setAuthors(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  const deleteHandler = authorId => {}
  
  return (
    <>
      <HeaderStyled>
        <h1 className='text-3xl font-bold font-serif text-indigo-400 dark:text-indigo-300'>
          <a href="/">25 Authors</a>
        </h1>
      </HeaderStyled>
      
      <div className="container">
        <Routes>
          <Route path={"/"} 
            element={<DisplayAllAuthors
                authorsList={authors}
            />}
          />
          
        </Routes>
      </div>
    </>
  )
}

export default App
