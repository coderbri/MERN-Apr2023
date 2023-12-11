**`BrowserRouter`** can be wrapped in **main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

```jsx
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'

function App() {
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>D10: React Routing</h1>
      </header>
      
      <div className="container-fluid">
        
        <h2 className='text-center my-3'>Don't forget to `npm react-router-dom` to get started!</h2>
        <div className="d-flex justify-content-center gap-3">
          <Link to={"/home"}>Home</Link>
          |
          <Link to={"/about"}>About</Link>
        </div>
        
        <Routes>
            <Route path='/home' element={ <Homepage /> } />
            <Route path='/about' element={ <About /> } />
        </Routes>
        
      </div>
    </>
  )
}

export default App
```

### useParams
- 