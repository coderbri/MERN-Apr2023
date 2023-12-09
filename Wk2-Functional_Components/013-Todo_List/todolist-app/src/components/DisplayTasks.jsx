import React from 'react';

const DisplayTasks = ({ todoList, setTodoList }) => {
    
    const toggleTaskCompletion = ( taskToUpdate ) => {
        let updatedTodoList = todoList.map(( thisTask ) =>
            thisTask.id === taskToUpdate.id
            ? { ...thisTask, completed: !thisTask.completed } // load this task's data and change completion boolean to true
            : thisTask
        );
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
        localStorage.setItem('todoList', JSON.stringify(filteredTasksList));
        setTodoList(filteredTasksList);
    }
    
    return (
        <div className='col mx-auto'>
            {
                todoList.map(( task ) => (
                    <div key={ task.id } className='d-flex align-items-center justify-content-between mb-3'>
                        <div className="d-flex align-items-center gap-3">
                            <input type="checkbox" onChange={ ()=>toggleTaskCompletion(task) } className='form-check-input border border-secondary' />
                            <span className={ styled(task.completed) }>{ task.content }</span>
                        </div>
                        <button className="btn btn-danger" onClick={ ()=>handleTaskDeletion(task.id) }>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayTasks;
