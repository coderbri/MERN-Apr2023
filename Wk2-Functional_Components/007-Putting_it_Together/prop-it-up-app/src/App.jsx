import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
      <header className="bg-dark text-center text-light py-2 mb-4">
        <h1 className='fw-medium'>007 Putting it Together</h1>
      </header>
      
      <div className="container-fluid col-11">
        <div className="row justify-content-center">
          
          <div className="col-md-6">
            <PersonCard
              firstName={"Jane"} lastName={"Doe"}
              age={ 45 } hairColor={'Black'}
            />
          </div>
          <div className="col-md-6">
            <PersonCard
              firstName={"John"} lastName={"Smith"}
              age={ 88 } hairColor={'Brown'}
            />
          </div>
          <div className="col-md-6">
            <PersonCard
              firstName={"Millard"} lastName={"Fillmore"}
              age={ 50 } hairColor={'Brown'}
            />
          </div>
          <div className="col-md-6">
            <PersonCard
              firstName={"Maria"} lastName={"Smeetz"}
              age={ 62 } hairColor={'Brown'}
            />
          </div>
          
        </div>
      </div>
      
      
    </>
  )
}

export default App
