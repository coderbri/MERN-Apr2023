# D5: Hook Forms in React

<div style="display: flex; justify-content: space-between;">
    <p>Week 2 Session 2</p>
    <p>２０２３年１１月２３日（木）</p>
</div>

### Table of Contents

- [Introduction](#introduction)
- [App.js](#appjs)
- [Form.jsx](#formjsx)
- [FormObject.jsx](#formobjectjsx)
- [FormObject.jsx vs. Form.jsx](#formobjectjsx-vs-formjsx)
- [Synthetic Events](#synthetic-events)

## Introduction

This is a simple React application that demonstrates the creation of a form using functional components. The application includes two form components: `Form.jsx` and `FormObject.jsx`. The main goal is to showcase the handling of form data using React state and event handlers.

## App.js

The entry point of the application, where the `FormObject` component is rendered.

```javascript
import FormObject from "./components/FormObject"

function App() {

  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>Learning React & Functional Components</h1>
      </header>
      
      <div className="container">
        
        <FormObject />
        
      </div>
    </>
  )
}

export default App
```

## Form.jsx

This component uses the `useState` hook to manage the form state for title, release year, and genre. It employs individual event handlers for each input.

```javascript
import React from 'react';
import { useState } from 'react';

const Form = () => {
    
    const [ title, setTitle ] = useState("");
    const [ releaseYear, setReleaseYear ] = useState(1919);
    const [ genre, setGenre ] = useState("")
    
    const handleTitle = (e) => {
        // Upon triggering on the handleTitle() event, an object will be console.log(e)ed to the console displaying a variety of data from a SyntheticBaseEvent.
        // The only one we should be concerned about is the target key— target: input —which when clicked, will show the value stored in that key (i.e., the string, "title").
        // So we can access this value through the path: e.target.value.
        setTitle(e.target.value);
    }
    const handleReleaseYear = (e) => {
        setReleaseYear(e.target.value);
    }
    const handleGenre = (e) => {
        setGenre(e.target.value);
    }
    
    return (
        // Form JSX code here...
    );
}

export default Form;
```

## FormObject.jsx

This component uses a single state object, `show`, to manage all form fields. The `changeHandler` function dynamically updates the state based on the input's `name` attribute.

```javascript
import React from 'react';
import { useState } from 'react';

const FormObject = () => {
    
    const [ show, setShow ] = useState({
        title: '',
        releaseYear: 1919,
        genre: '',
    })
    
    const changeHandler = (e) => {
        // Instead of defining state for every attribute of our component object, we can create a state for the whole object that contains the attributes.
        // The inputs must have their name so the object keys can be defined and the values can be set to them.
        setShow({ ...show, [e.target.name]:e.target.value })
    }
    
    return (
        // FormObject JSX code here...
    );
}

export default FormObject;
```

## FormObject.jsx vs. Form.jsx

### FormObject.jsx (Principle Component)

- **Concise Code:** The use of a single state object (`show`) results in more concise code.
- **Dynamic Handling:** The `changeHandler` function dynamically updates the state based on the input's `name` attribute, reducing redundancy.
- **Scalability:** Easily scalable to handle additional form fields without modifying the state or event handlers.

### Form.jsx

- **Individual State:** Maintains separate state variables for each form field.
- **Explicit Handling:** Each input has its dedicated event handler, providing explicit control but leading to more code.

In summary, `FormObject.jsx` offers a more concise and scalable solution by using a single state object and dynamic event handling, making it a preferable choice for managing form data.

## Synthetic Events

- **Triggering handleTitle():** Upon triggering on the `handleTitle()` event, an object will be `console.log(e)`ed to the console displaying a variety of data from a `SyntheticBaseEvent`. The only one we should be concerned about is the **`target`** key— `target: input` —which when clicked, will show the value stored in that key (i.e., the string, _"title"_). So we can access this value through the path: `e.target.value`.

- **State for Whole Object:** Instead of defining state for every attribute of our component object, we can create a state for the **whole object** that contains the attributes.

- **Input Naming:** The inputs must have their name so the object keys can be defined, and the values can be set to them.
