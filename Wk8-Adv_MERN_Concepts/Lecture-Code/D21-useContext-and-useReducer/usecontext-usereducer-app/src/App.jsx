import DisplayUsers from "./components/DisplayUsers"
import TodoReducer from "./components/TodoReducer"
import UserForm from "./components/UserForm"
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <>
        <div className="container mx-auto">
          <h1 className='my-4 font-bold text-2xl'>Context & useReducer</h1>
          <UserProvider>
            <UserForm />
            <DisplayUsers />
            
            <hr className="mt-10" />
            <TodoReducer />
            
          </UserProvider>
        </div>
    </>
  )
}

export default App
