import DisplayUsers from "./components/DisplayUsers"
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
          </UserProvider>
        </div>
    </>
  )
}

export default App
