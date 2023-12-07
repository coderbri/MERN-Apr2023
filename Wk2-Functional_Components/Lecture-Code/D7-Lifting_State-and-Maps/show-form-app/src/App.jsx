import { useState } from "react";
import ShowForm from "./components/ShowForm"
import DisplayShows from "./components/DisplayShows";

/* Lifting State
  This is where lifting state becomes important.
    because if we want to use data from another component,
    we need to share with the Parent so the Parent can share
    it with the other Child Component.
  1. Instead of initializing the `allShows` state,
      import this state in the main App component,
      and initialize it here instead.
  2. Now this state will be passed down via props to the Child Component.
*/

function App() {
  
  // Lifting this State up to the Parent Component from Child Component, ShowForm.jsx
  const [ allShows, setAllShows ] = useState([]);
  
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>D7: Lifting State</h1>
      </header>
      
      <div className="container">
        
        <ShowForm
          showList={ allShows }
          setShowList={ setAllShows }
          />
        
        <DisplayShows
          showList={ allShows }
          setShowList={ setAllShows }
        />
        
      </div>
    </>
  )
}

export default App
