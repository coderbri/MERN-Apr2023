import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import HeaderStyled from './components/styles/Header.styled'
import AddButtonStyled from './components/styles/AddButton.styled';
import DisplayAlbums from './components/DisplayAlbums'
import DisplayOneAlbum from './components/DisplayOneAlbum';
import CreateAlbumForm from './components/CreateAlbumForm';

function App() {
  const [ albumCollection, setAlbumCollection ] = useState([]);
  
  return (
    <>
      <HeaderStyled>
        <h1 className='text-3xl font-bold font-serif text-emerald-300'>
          <a href="/">D17 AlbumApp</a>
        </h1>
        <Link to={"/album/create"}>
          <AddButtonStyled />
        </Link>
      </HeaderStyled>
      
      <div className="container mx-auto">
        <Routes>
          <Route path={"/"} element={<DisplayAlbums albumList={albumCollection} setAlbumList={setAlbumCollection} />} />
          <Route path={"/album/:id/view"} element={<DisplayOneAlbum />} />
          <Route path={"/album/create"} element={<CreateAlbumForm />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
