import './App.css';
import Nav from './components/Nav';
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
      
      <div className="container-fluid">
        
        <div className="Flex_Shows row justify-content-center">
          <div className="col-6">
            <Shows title={'Fruits Basket'} releaseYear={'2001'} />
          </div>
          <div className="col-6">
            <Shows title={'Full Moon'} releaseYear={'2002'} />
          </div>
          <div className="col-6">
            <Shows title={'My Hero Academia'} releaseYear={'2015'} />
          </div>
          <div className="col-6">
            <Shows title={'SPY x FAMILY'} releaseYear={'2021'} />
          </div>
        </div>
        
      </div>
      
      <FirstComponent allUsers={users} />
      
    </div>
  );
}

export default App;