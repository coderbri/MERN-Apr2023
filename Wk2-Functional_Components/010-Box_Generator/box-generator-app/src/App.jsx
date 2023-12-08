import { useState } from "react"
import BoxGenForm from "./components/BoxGenForm"
import DisplayBoxes from "./components/DisplayBoxes"


function App() {
  
  // This state holds an array of strings for the colors input.
  const [ boxColorArray, setBoxColorArray ] = useState([]);
  
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>010: Box Generator</h1>
      </header>
      
      <div className="container-fluid">
        
        <BoxGenForm
          listOfColors={ boxColorArray }
          setListOfColors={ setBoxColorArray }
          />
        
        <DisplayBoxes
          listOfColors={ boxColorArray }
          setListOfColors={ setBoxColorArray }
        />
        
      </div>
    </>
  )
}

export default App
