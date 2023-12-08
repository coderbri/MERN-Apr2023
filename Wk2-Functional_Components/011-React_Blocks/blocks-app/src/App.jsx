import Advertisement from './components/Advertisement'
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navigation'
import SubContent from './components/SubContent'
import { Container } from './components/styles/Container.styled'


function App() {
  return (
    <>
      <Container>
        
        <Header />
        <Navigation />
        
        <Main
          /*
          ? While not declared as a prop here, we must pass down { children }
            in the Main Component's file so that the other components within here,
            can also be displayed. */
        >
          <SubContent />
          <SubContent />
          <SubContent />
          
          <Advertisement />
        </Main>
        
      </Container>
    </>
  )
}

export default App
