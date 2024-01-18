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
  
  const handleAuthorDeletion = authorId => {
    axios.delete(`http://localhost:8000/api/author/delete/${authorId}`)
      .then((res) => {
        console.log(res);
        setAuthors(authors.filter( author => author._id !== authorId ))
      })
      .catch(err => console.log(err));
  }
  
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
                deleteHandler={handleAuthorDeletion}
            />}
          />
          
        </Routes>
      </div>
    </>
  )
}

export default App
