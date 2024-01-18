import axios from 'axios'
import { useEffect, useState } from 'react'
import DisplayAllAuthors from './components/DisplayAllAuthors'
import HeaderStyled from './components/styles/Header.styled'
import AuthorForm from './components/AuthorForm'

function App() {
  
  const [ authors, setAuthors ] = useState([]);
  const [ formErrors, setFormErrors ] = useState([]);
  
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
  
  const createAuthor = authorObject => {
    axios.post('http://localhost:8000/api/author/new', authorObject)
      .then((res) => {
        console.log(res);
        setAuthors([ ...authors, res.data ]);
      })
      .catch((err) => {
        console.log(err.response);
        setFormErrors(err.response.data.errors)
      });
  }
  
  return (
    <>
      <HeaderStyled>
        <h1 className='text-3xl font-bold font-serif text-indigo-400 dark:text-indigo-300'>
          <a href="/">25 Authors</a>
        </h1>
      </HeaderStyled>
      
      <div className="container mx-auto">
        
        <h2 className='text-3xl font-bold text-center my-3'>Add a New Author Now!</h2>
        <AuthorForm
            onSubmitProp={ createAuthor }
            errors={ formErrors }
            initialAuthorFName=""
            initialAuthorLName=""
        />
        
        <DisplayAllAuthors
            authorsList={ authors }
            deleteHandler={ handleAuthorDeletion }
        />
        
      </div>
    </>
  )
}

export default App
