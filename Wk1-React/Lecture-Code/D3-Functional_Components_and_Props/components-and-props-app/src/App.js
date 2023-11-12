import Nav from './components/Nav';
import './App.css';
import Shows from './components/Shows';
import FirstComponent from './components/FirstComponent';

function App() {
  
  const users = {
    JonnyTest: {
      firstName: 'Jonny',
      lastName: 'Test',
    },
    RuanMei: {
      firstName: 'Mei',
      lastName: 'Ruan',
    }
  }
  
  return (
    <div className="App">
      <Nav name={'Jane'} />
      <Shows title={'Fruits Basket'} releaseYear={'2001'} />
      <Shows title={'Full Moon'} releaseYear={'2002'} />
      <Shows title={'My Hero Academia'} releaseYear={'2015'} />
      <Shows title={'SPY x FAMILY'} releaseYear={'2021'} />
      
      <FirstComponent allUsers={users} />
    </div>
  );
}

export default App;
