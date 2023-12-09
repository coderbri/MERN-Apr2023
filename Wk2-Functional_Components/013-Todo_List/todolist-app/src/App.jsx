import { useEffect, useState } from "react"
import NewTaskForm from "./components/NewTaskForm"
import DisplayTasks from "./components/DisplayTasks";


function App() {
  
  const [ todoList, setTodoList ] = useState([]);
  
  useEffect(() => {
    // Load tasks from localStorage
    const savedTodoList = localStorage.getItem('todoList');
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);
  
  return (
    <div className="bg-secondary-subtle vh-100">
      
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-semibold text-center'>013: Todo List</h1>
      </header>
      
      <div className="container-fluid">
        
        <div className="mx-auto col-10 col-lg-6">
          <div className="bg-light rounded p-4 mt-4">
            <NewTaskForm
              todoList={ todoList }
              setTodoList={ setTodoList }
            />
            <hr className="col-8 mx-auto" />
            <DisplayTasks
              todoList={ todoList }
              setTodoList={ setTodoList }
            />
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
