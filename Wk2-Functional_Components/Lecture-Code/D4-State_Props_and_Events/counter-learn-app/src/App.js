import './App.css';
import Button from './components/Button';
import Show from './components/Show';
import UseStateHook from './components/UseStateHook';

function App() {
  return (
    <div className="App">
      
      <header className="bg-dark py-2 mb-3 text-light">
        <h1 className="fw-bold">D4 Synthetic Events & useState</h1>
      </header>
      
      <div className="container-fluid">
        <h2 className='fw-bold'>Synthetic Events</h2>
        <Button />
        
        <hr className='col-8 mx-auto' />
        <h2 className='fw-bold'>useState</h2>
        <UseStateHook />
        
        <hr className='col-3 mx-auto' />
        <div className="row justify-content-center">
          <div className="col-6">
            <Show showTitle={'Fruits Basket'} releaseYear={2001} likes={500} />
          </div>
          <div className="col-6">
            <Show showTitle={'Full Moon'} releaseYear={2002} likes={25} />
          </div>
          <div className="col-6">
            <Show showTitle={'My Hero Academia'} releaseYear={2015} likes={100} />
          </div>
          <div className="col-6">
            <Show showTitle={'SPY x FAMILY'} releaseYear={2021} likes={1000} />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
