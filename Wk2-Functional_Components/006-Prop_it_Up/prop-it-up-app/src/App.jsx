import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
      <header className="bg-dark text-center text-light py-2 mb-4">
        <h1 className='fw-medium'>006 Prop it Up</h1>
      </header>
      
      <PersonCard
        firstName={"Jane"} lastName={"Doe"}
        age={ 45 } hairColor={'Black'}
      />
      <PersonCard
        firstName={"John"} lastName={"Smith"}
        age={ 88 } hairColor={'Brown'}
      />
      <PersonCard
        firstName={"Millard"} lastName={"Fillmore"}
        age={ 50 } hairColor={'Brown'}
      />
      <PersonCard
        firstName={"Maria"} lastName={"Smeetz"}
        age={ 62 } hairColor={'Brown'}
      />
      
    </>
  )
}

export default App
