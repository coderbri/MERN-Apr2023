import React from 'react';

const ParentComponent = (props) => {
    return ( // Below, we are providing data for ChildComponent
        <div>
            <ChildComponent firstName={'Mary'} lastName={'Jane'} />
        </div>
    );
}

const ChildComponent = (props) => {
    return(
        <p>
            Hello! My name is { props.firstName } { props.lastName }.
        </p>
    );
}

// Props in this example would look like this in JS:
//  props = {
//      firstName: "Mary",
//      lastName: "Jane"
//  }