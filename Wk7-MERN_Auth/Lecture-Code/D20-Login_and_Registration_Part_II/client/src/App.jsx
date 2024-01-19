import HeaderStyled from './components/styles/Header.styled'
import Button from './components/styles/Button.styled';

function App() {
  
  return (
    <>
      <HeaderStyled>
        <h1 className='text-3xl font-bold font-serif text-indigo-400 dark:text-indigo-300'>
          <a href="/">D20 MERN Auth</a>
        </h1>
        <nav className='flex justify-center items-center gap-4 mt-4 sm:mt-0'>
          <p>Link</p>
          <p>Link</p>
          <Button>Login</Button>
        </nav>
      </HeaderStyled>
      
      <div className="container mx-auto">
        <h2>Hello World</h2>
      </div>
    </>
  )
}

export default App
