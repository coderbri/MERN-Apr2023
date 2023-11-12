import React from 'react';

const FirstComponent = ({ allUsers }) => {
    
    return (
        <div>
            <h4>All Users:</h4>
            {Object.keys(allUsers).map( (username) => (
                <div key={ username }>
                    <h6>{allUsers[username].firstName} {allUsers[username].lastName}</h6>
                </div>
            ))}
        </div>
    );
}

export default FirstComponent;
