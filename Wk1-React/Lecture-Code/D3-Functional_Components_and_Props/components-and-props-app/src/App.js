import Nav from './components/Nav';
import './App.css';
import Shows from './components/Shows';

function App() {
  return (
    <div className="App">
      <Nav name={'Jane'} />
      <Shows title={'Fruits Basket'} releaseYear={'2001'} />
      <Shows title={'Full Moon'} releaseYear={'2002'} />
      <Shows title={'My Hero Academia'} releaseYear={'2015'} />
      <Shows title={'SPY x FAMILY'} releaseYear={'2021'} />
    </div>
  );
}

export default App;
