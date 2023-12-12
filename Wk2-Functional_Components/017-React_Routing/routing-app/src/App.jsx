import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import ParamsComponent from "./components/ParamsComponent"

function App() {
  
  // Link Route Styling
  const linkStyle = {
    color: '#fff',
    textDecoration: "none",
  }
  
  return (
    <>
      <header className="bg-dark text-light py-2 mb-3">
        <h1 className='fw-semibold text-center'>
          <a href="/" style={ linkStyle }>017: React Routing</a>
        </h1>
        <div className="d-flex justify-content-center gap-3">
            <Link to="/home" style={ linkStyle }>Home</Link>
        </div>
      </header>
      
      <div className="container-fluid">
        <div className="col-10 col-md-5 mx-auto">
          <div className="text-center">
            <h2>What do you want to see?</h2>
            <h5>Type any of the following option into the URL:</h5>
            <ul className="text-start">
              <li>/home</li>
              <li>/number</li>
              <li>/word</li>
              <li>/word/textColor/backgroundColor</li>
            </ul>
          </div>
        </div>
        
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/:string" element={ <ParamsComponent /> } />
          <Route path="/:string/:textColor/:bgColor" element={ <ParamsComponent /> } />
          
        </Routes>
        
      </div>
    </>
  )
}

export default App
