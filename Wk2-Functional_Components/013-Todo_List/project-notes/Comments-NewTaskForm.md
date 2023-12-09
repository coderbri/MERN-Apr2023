This file contains the extra comments used to check Task Form functionality:

```jsx
import React, { useState } from 'react';

const NewTaskForm = ({ todoList, setTodoList }) => {
    
    const [ newTask, setNewTask ] = useState("");
    const [ inputError, setInputError ] = useState("");
    
    const handleTaskInput = (e) => {
        const taskInput = e.target.value;
        console.log(`Adding task: "${taskInput}"...`);
        
        if ( taskInput.trim().length === 0 ) {
            setInputError("Cannot submit empty task!");
        } else {
            setInputError("");
        }
        setNewTask(taskInput);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`### Task: "${ newTask }" has been added!`);
        // console.log(todoList);
        
        /* Task ID Generation:
            * Since there is no backend to this project,
            *   the program will create a new task object which
            *   will store the task data and generate an id for
            *   each valid newTask. This will be needed for
            *   managing task in the Display page.
        */
        const newTodoItem = {
            content: newTask,
            completed: false,
            id: Math.floor(Math.random() * 100000000).toString()
        }
        
        // * Add Entry to Array & Reset Form
        const updatedTodoList = [ ...todoList, newTodoItem ];
        setTodoList(updatedTodoList);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList))
        setNewTask("");
    }
    
    return (
        <div className=''>
            
            <form onSubmit={ submitHandler }>
                <div className="row align-items-center justify-content-center gap-1">
                    
                    { inputError ? <p className="col-8 alert alert-danger">{ inputError }</p> : "" }
                    <div className="col-auto">
                        <input type="text" name="newTask"
                            onChange={ handleTaskInput } value={ newTask }
                            placeholder='add task here' autoComplete='off'
                            className="form-control bg-secondary-subtle"
                        />
                    </div>
                    <div className="col-auto">
                    { inputError ?
                        <input type="submit" value="Add" className="btn btn-dark" disabled />
                        : <input type="submit" value="Add" className="btn btn-dark" />
                    }
                    </div>
                </div>
                
            </form>
            
        </div>
    );
}

export default NewTaskForm;
```
