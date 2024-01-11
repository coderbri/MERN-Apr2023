import React, { Component } from 'react'

class CreateCharacterForm extends Component {
    
    // declare state here:
    constructor( props ) {
        super( props )
        this.state = {
            name: "",
            elementType: "",
            path: "",
            owned: ""
        }
    }
    // useEffect goes here:
    componentDidMount() {
        console.log( "Component did mount!" );
    }
    componentDidUpdate() {
        console.log( "Component did updated!" );
    }
    
    render() {
        return (
            <div className='max-w-md mx-auto'>
                <h2 className="text-2xl font-semibold text-center mt-4 mb-2">Add a Character</h2>
                
                <form>
                    
                    <div className='mb-5'>
                        <label className='block mb-2 text-sm font-semibold text-gray-900 dark:text-white'>Name</label>
                        <div>
                            <input type="text" name='name'
                                // onChange={ changeHandler } value={ productItem.productName }
                                className='text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
                                placeholder='Ruan Mei' required
                            />
                        </div>
                    </div>
                    
                    <div className='mb-5'>
                        <label className='block mb-2 text-sm font-semibold text-gray-900 dark:text-white'>Element Type</label>
                        <div>
                            <input type="text" name='elementType'
                                // onChange={ changeHandler } value={ productItem.productName }
                                className='text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
                                placeholder='Ice' required
                            />
                        </div>
                    </div>
                    
                    <div className='mb-5'>
                        <label className='block mb-2 text-sm font-semibold text-gray-900 dark:text-white'>Path</label>
                        <div>
                            <input type="text" name='path'
                                // onChange={ changeHandler } value={ productItem.productName }
                                className='text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
                                placeholder='Harmony' required
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-end mb-5">
                        <button className='text-sm text-slate-800 font-bold
                                bg-gradient-to-br from-slate-400 to-sky-300
                                hover:bg-gradient-to-br hover:from-slate-600 hover:to-sky-600
                                px-6 py-1.5 border border-none rounded
                            '>Add</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default CreateCharacterForm;
