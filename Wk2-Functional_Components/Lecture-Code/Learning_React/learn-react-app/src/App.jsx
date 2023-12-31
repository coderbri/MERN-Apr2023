import ChildrenTestComponent from './components/ChildrenTestComponent';
import ConditionallyRenderedEx from './components/ConditionallyRenderedEx';
import MapIteration from './components/MapIteration';
import Product from './components/Product';
import StyledButtonComponent1 from './components/StyledButtonComponent1';
import StyledButtonComponent2 from './components/StyledButtonComponent2';
import StyledButtonComponent3 from './components/StyledButtonComponent3';
import UserForm from './components/UserForm';

function App() {
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>Learning React & Functional Components</h1>
      </header>
      
      <div className="container">
        
        <h2 className='text-center py-2'>Using useState</h2>
        <div className="row justify-content-center">
          
          <div className="col-md-6">
            <Product
              title={ "아이폰 15 프로" }
              desc={ "티타늄. 조강력. 초경량. 초프로." }
              cost={ 1550000 }
              initialStock={ 5 }
            />
          </div>
          <div className="col-md-6">
            <Product
              title={ "아이패드 미니 6" }
              desc={ "메가급 성능. 크기만 미니." }
              cost={ 769000 }
              initialStock={ 25 }
            />
          </div>
          <div className="col-md-6">
            <Product
              title={ "맥복 프로 M3 Pro" }
              desc={ "비교 불가 성능. 시선 가탈 매력." }
              cost={ 2390000 }
              initialStock={ 15 }
            />
          </div>
          <div className="col-md-6">
            <Product
              title={ "애플워치 시리즈 9" }
              desc={ "보다 똑똑. 보다 또렷. 강력." }
              cost={ 599000 }
              initialStock={ 10 }
            />
          </div>
          
          <hr className='mt-4' />
          
          <h2 className="text-center py-2">Using Hook Forms</h2>
          <UserForm />
          
          <hr className='mt-4' />
          
          <h2 className="text-center py-2">Conditional Rendering</h2>
          <ConditionallyRenderedEx />
          
          <hr className='mt-4' />
          
          <h2 className="text-center py-2">Children in Components</h2>
          <ChildrenTestComponent header={ "This is a Header Prop!" } >
            <h3>Here are the children components passed down via props:</h3>
            <ul>
              <li>First Child</li>
              <li>Second Child</li>
              <li>Final Child</li>
            </ul>
          </ChildrenTestComponent>
          
          <hr className='mt-4' />
          <h2 className="text-center py-2">Iterating with Map</h2>
          <MapIteration />
          
          <hr className='mt-4' />
          <h2 className="text-center py-2">Styling in React</h2>
          <StyledButtonComponent1 buttonText1={ "Styled Button" } />
          <StyledButtonComponent2 buttonText2={ "Styled Button 2" } />
          <StyledButtonComponent3 buttonText3={ "Styled Button 3" } />
          
        </div>
      </div>
    </>
  );
}

export default App;
