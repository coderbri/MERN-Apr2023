import React, { useReducer, useState } from 'react';

//               state, object
const reducer = (todos, action) => {
    console.log(`TODOS: ${todos}`);
    // console.log(`>> ACTION: ${ action }`); //! returns ACTION: [ object, Object ]
    // console.log(`>> ACTION: ${ JSON.stringify(action) }`); //* returns ACTION: {"type":"ADD_TODO","payload":{"todo":"sample task"}}
    console.log('PAYLOAD', action.payload); // returns todo object {todo: "task name"} from state
    console.log('PAYLOAD TODO', action.payload.todo); // returns String task of todo object from state
    switch(action.type){
        case 'ADD_TODO':
            return [...todos, action.payload.todo]; // return loaded todos and the String of the todo tiem from state
    }
}

const TodoReducer = () => {
    
    const [ todo, setTodo ] = useState('');
    const [ todoList, dispatch ] = useReducer(reducer, []);
    
    const submitTodo = (e) => {
        e.preventDefault();
        // calling reducer function 
        // passing in an object that will be referred to as action inside of reducer
        dispatch({ type:'ADD_TODO', payload:{todo:todo} });
    }
    
    return (
        <div className='mx-w-md mx-auto'>
            
            <h2 className='my-4 font-bold text-xl'>useReducer Example</h2>
            <form onSubmit={submitTodo}>
                
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={ todo } onChange={(e) => setTodo(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-300 appearance-none dark:text-white dark:border-zinc-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                        placeholder=" " required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-zinc-500 dark:text-zinc-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Task
                    </label>
                </div>
                
                <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3.5 py-2 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                    Add Task
                </button>
            
            </form>
            
        </div>
    );
}

export default TodoReducer;
