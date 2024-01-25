import React from 'react';

const Dashboard = ({ isDarkMode }) => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            
            <div id="Flex__Div" className="flex flex-col lg:flex-row gap-4">
                <div className={`order-2 lg:order-1 mb-4 p-6 rounded-lg lg:w-2/3 ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 shadow-md'}`}>
                    <h2 className='font-bold text-2xl mb-5'>Welcome User</h2>
                    <p>An array of all posts would go here</p>
                </div>
                
                <div className='order-1 lg:order-2 lg:w-1/3'>
                    <div className={`mb-4 p-6 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 shadow-md'} hidden lg:flex flex-col`}>
                        <h3 className='font-semibold text-xl mb-2'>AD</h3>
                    </div>
                    
                    <div className={`lg:mb-4 p-6 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 shadow-md'}`}>
                        <h3 className='font-semibold text-xl mb-2'>Profile Actions</h3>
                        <div className="flex justify-center">
                            
                            <div className={`flex flex-col text-center ${ isDarkMode ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200' } py-3 px-6 rounded-lg`}>
                                <div className={`text-lg p-3 rounded-full
                                    ${ isDarkMode 
                                        ? 'text-emerald-100 bg-teal-400/25'
                                        : 'text-emerald-700 bg-teal-500/25'
                                    }
                                `}>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                                <p className='font-medium'>Post</p>
                            </div>
                            
                            <div className={`flex flex-col text-center ${ isDarkMode ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200' } py-3 px-6 rounded-lg`}>
                                <div className={`text-lg p-3 rounded-full
                                    ${ isDarkMode 
                                        ? 'text-sky-100 bg-cyan-400/25'
                                        : 'text-sky-700 bg-cyan-500/25'
                                    }
                                `}>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                                <p className='font-medium'>Image</p>
                            </div>
                            
                            <div className={`flex flex-col text-center ${ isDarkMode ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200' } py-3 px-6 rounded-lg`}>
                                <div className={`text-lg p-3 rounded-full
                                    ${ isDarkMode 
                                        ? 'text-orange-100 bg-yellow-400/25'
                                        : 'text-orange-700 bg-yellow-500/50'
                                    }
                                `}>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                                <p className='font-medium'>Video</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`mb-4 p-6 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 shadow-md'} hidden lg:flex flex-col`}>
                        <h3 className='font-semibold text-xl mb-2'>Platform Actions</h3>
                        <p>Side Content</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;
