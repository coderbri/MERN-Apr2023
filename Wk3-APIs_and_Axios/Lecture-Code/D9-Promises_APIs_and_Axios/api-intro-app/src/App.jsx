import PeopleExample from "./components/PeopleExample"
import SwapiDoc from "./components/SwapiDoc"


function App() {
  
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>D9: APIs with Axios & Promises</h1>
      </header>
      
      <div className="container">
        <div className="col-8 mx-auto">
          <SwapiDoc />
          <PeopleExample />
        </div>
      </div>
      
    </>
  )
}

export default App
