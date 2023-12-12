import RenderPokemon from "./components/RenderPokemon"


function App() {
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
          <h1 className='fw-bold text-center'>016: Axios Pokémon API</h1>
      </header>
      
      <div className="container-fluid">
        <div className="col-11 col-lg-8 mx-auto">
          <RenderPokemon />
        </div>
      </div>
      
    </>
  )
}

export default App
