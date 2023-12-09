This file contains the extra comments that I used to test the toggleTaskCompletion() function.

```jsx
import React from 'react';

const DisplayTasks = ({ todoList, setTodoList }) => {
    
    const toggleTaskCompletion = ( taskToUpdate ) => {
        let updatedTodoList = todoList.map((thisTask) => {
            if ( thisTask.id === taskToUpdate.id ) {
                let updatedItem = { ...thisTask }; // load this task's data
                // console.log(updatedItem.completed) // ? should print false
                updatedItem.completed = !thisTask.completed; // boolean change from false, set true
                // console.log(updatedItem.completed) // ? should print true
                console.log(`Completed "${updatedItem.content}"!`);
                return updatedItem;
            } else { // Return this task unchanged
                return thisTask;
            }
        })
        // console.log(thisTask); // ? prints updated task
        // console.log(updatedTodoList); // ? prints updated list
        setTodoList(updatedTodoList);
    }
    
    const styled = ( completed ) => {
        if ( completed === true ) {
            return "mb-0 fw-normal text-decoration-line-through text-secondary text-opacity-75"
        } else {
            return "mb-0 fw-medium"
        }
    }
    
    const handleTaskDeletion = ( taskId ) => {
        const filteredTasksList = todoList.filter( (todoItem, _i) => {
            return todoItem.id !== taskId;
        })
        console.log(`Task #${taskId} has been deleted!`);
        // console.log(filteredTasksList); // ? confirm if task to be deleted is gone
        localStorage.setItem('todoList', JSON.stringify(filteredTasksList));
        setTodoList(filteredTasksList);
    }
    
    return (
        <div className='col mx-auto'>
            {
                todoList.map(( task ) => (
                    <div key={ task.id } className='d-flex align-items-center justify-content-between mb-3'>
                        
                        <div className="d-flex align-items-center gap-3">
                            <input type="checkbox"
                                className='form-check-input border border-secondary'
                                onChange={ ()=>handleToggleCompletion(task) }
                            />
                            <span className={ styled(task.completed) }>
                                { task.content }
                            </span>
                        </div>
                        
                        <button className="btn btn-danger" onClick={ ()=>handleTaskDeletion(task.id) }>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayTasks;
```