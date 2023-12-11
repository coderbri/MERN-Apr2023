import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import RenderWord from './components/RenderWord'

function App() {
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>D10: React Routing</h1>
      </header>
      
      <div className="container-fluid">
        
        <h2 className='text-center my-3'>Don't forget to `npm react-router-dom` to get started!</h2>
        
        <BrowserRouter>
          
          <div className="d-flex justify-content-center gap-3">
            {/* <a> tags freshes browser page, which is NOT ideal. */}
            {/* Use Link instead */}
            <Link to={"/home"}>Home</Link>
            |
            <Link to={"/about"}>About</Link>
            {/* Links have to be within BrowserRouter */}
          </div>
          
          <Routes>
            {/*       Route     -     ComponentName */}
            <Route path='/home' element={ <Homepage /> } />
            <Route path='/about' element={ <About /> } />
            <Route path="/word/:usersword" element={ <RenderWord /> } />
          </Routes>
          
          
        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
