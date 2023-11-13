# Putting it Together

**Putting it Together** is an extension of the [Prop it Up](../006-Prop_it_Up/) project, introducing the use of `useState` to dynamically update a person's age upon clicking the "Birthday" button.

<div align="center">
<img src="./readme-assets/007-DEMO.gif" width="450px" height="auto">
</div>


## App Component

The `App` component, located in `App.jsx`, remains the main entry point for the application. The structure has been updated to use a grid layout for a more organized display.

### App.jsx

```jsx
import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
      <header className="bg-dark text-center text-light py-2 mb-4">
        <h1 className='fw-medium'>007 Putting it Together</h1>
      </header>
      
      <div className="container-fluid col-11">
        <div className="row justify-content-center">
          
          <div className="col-md-6">
            {/* PersonCard components rendered here */}
          </div>
          {/* Repeat the structure for other PersonCard components */}
          
        </div>
      </div>
    </>
  )
}

export default App
```

## PersonCard Component with **`useState`**

The `PersonCard` component, located in `PersonCard.jsx`, has been updated to use the `useState` hook. It introduces a "Birthday" button that, when clicked, increments the person's age dynamically.

### PersonCard.jsx

```jsx
import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    
    const [ currentAge, setCurrentAge ] = useState(age)
    
    return (
        <div className='border border-3 rounded p-3 mb-3 text-center'>
            <h2 className='fw-bold'>{ lastName }, { firstName }</h2>
            <p><strong>Age:</strong> { currentAge }</p>
            <p><strong>Hair Color:</strong> { hairColor }</p>
            
            <button onClick={ () => setCurrentAge(currentAge + 1) } className="btn btn-dark">
                Birthday
            </button>
        </div>
    );
}

export default PersonCard;
```

## Logic Explanation

1. **useState**: The `useState` hook is used to create a state variable `currentAge` initialized with the provided `age` prop.

2. **Rendering Age**: The age displayed is now dynamically taken from the `currentAge` state.

3. **Birthday Button**: A "Birthday" button is added with an `onClick` event that triggers the `setCurrentAge` function to increment the `currentAge` state by 1.

---
<p align="right">Completed: ２０２３年１１月１３日（月）</p>