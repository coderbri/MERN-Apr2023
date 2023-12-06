# Learn React Project

### Table of Contents
1. [App Component](#app-component)
    1. [`Product` Component](#3-product-component)
    2. [`UserForm` Component](#2-userform-component)
        1. [Form State Management](#form-state-management)
        2. [Form Submission](#form-submission)
        3. [Form Input Fields](#form-input-fields)
        4. [Submit Button](#submit-button)
    3. [Conditionally Rendered UserForm Component](#conditionally-rendered-userform-component)
        1. [Username Validation](#username-validation)
        2. [Form Submission - Updated Button](#form-submission---updated-button)
    3. [`ChildrenTestComponent` Component](#4-childrentestcomponent-component)
        1. [Usage in App.jsx](#usage-in-appjsx)
        2. [ChildrenTestComponent Implementation](#childrentestcomponent-implementation)
        3. [Understanding Children Props](#understanding-children-props)
    5. [`MapIteration` Component](#mapiteration-component)
        1. [Usage in `MapIteration.jsx`](#usage-in-mapiterationjsx)
        2. [Importance of `.map()` in Development](#importance-of-map-in-development)
2. [React Styling Methods](#react-styling-methods)
    1. [Direct Import](#1-direct-import)
    2. [Inline CSS with React State](#2-inline-css-with-react-state)
    3. [CSS Modules](#3-css-modules)

## App Component

The `App` component is the main component that orchestrates the structure of the React Vite project. It includes a header, product displays using the `Product` component, and a form using the `UserForm` component.

Example usage:

```jsx
import Product from './components/Product';
import UserForm from './components/UserForm';

function App() {
    // ... (component content)
}

export default App;
```

## 1. `Product` Component

<div align="center">
<img src="./readme-assets/Product-Component.png" width="450px" height="auto">
</div>

The `Product` component is responsible for displaying information about a product. It takes props such as `title`, `desc`, `cost`, and `initialStock` to render a product card. The component uses state with `useState` to manage the stock availability.

Example usage:

```jsx
import React, { useState } from 'react';

const Product = ({ title, desc, cost, initialStock }) => {
    // ... (component content)
};

export default Product;
```

## 2. `UserForm` Component

<div align="center">
<img src="./readme-assets/UserForm-Component.png" width="450px" height="auto">
</div>

The `UserForm` component is a form designed to capture user information. It uses `useState` to manage form inputs for `username`, `email`, and `password`. The form includes an `onSubmit` event handler to create a new user object and log a welcome message.

Example usage:

```jsx
import React, { useState } from 'react';

const UserForm = (props) => {
    // ... (component content)
};

export default UserForm;
```

### Form State Management

The form state management section explains how the `useState` hook is used within the `UserForm` component to dynamically manage the state of the form inputs (`username`, `email`, `password`).

### Form Submission

This section describes the `onSubmit` event handler in the `UserForm` component. It prevents the default form submission behavior, creates a new user object with entered information, and logs a welcome message to the console.

### Form Input Fields

The form input fields section explains how each input field within the `UserForm` component is enclosed within a styled container for visual clarity. The `onChange` event is utilized to update the corresponding state variable as the user types.

### Submit Button

This section describes the submit button in the `UserForm` component. The button triggers the `onSubmit` event and has a dark-themed style for consistency with the overall design.


## Conditionally Rendered UserForm Component

The `UserForm` component has been enhanced to include live error validations using ternary operators. These changes provide immediate feedback to users as they fill out the form.

### Username Validation

The username input field now undergoes real-time validation. The `handleUsername` function utilizes ternary operators to dynamically update the `usernameError` state based on the length of the entered username.

```jsx
// * Handle Validations with Ternary Operators
const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 1) {
        setUsernameError("Username is required!");
    } else if (e.target.value.length < 3) {
        setUsernameError("Username must be at least 3 characters!");
    } else {
        setUsernameError(""); // Empty String is equivalent to "falsy" value
    }
}
```

The error message is then conditionally rendered below the username input field, providing feedback to the user in case of validation errors.

```jsx
<div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded border border-dark-subtle">
    <label className="col-md-3 col-form-label fw-semibold">Username: </label>
    <div className="col-md-9">
        <input type="text" onChange={handleUsername}
            value={username} className="form-control" />
        {usernameError ?
            <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{usernameError}</p> :
            ''
        }
    </div>
</div>
```

### Form Submission - Updated Button

The submit button now dynamically disables when there is a validation error in the username. This is achieved using a ternary operator on the `usernameError` state.

```jsx
<div className="row col-3 mx-auto">
    {usernameError ?
        <input type="submit" value="Create User" className='btn btn-dark' disabled /> :
        <input type="submit" value="Create User" className='btn btn-dark' />
    }
</div>
```

If there is a validation error in the username, the button is disabled, preventing the user from submitting the form until the error is resolved.

These enhancements create a more user-friendly form with immediate feedback, guiding users through the submission process.




## 4. `ChildrenTestComponent` Component

The `ChildrenTestComponent` is a React component that demonstrates the use of children props. Children props allow you to pass down components or elements as children to a parent component, enabling a flexible and dynamic composition of components.

### Usage in App.jsx

In the `App.jsx` file, the `ChildrenTestComponent` is utilized to showcase the passing of children components via props. The component is invoked with a `header` prop and children components nested within it:

```jsx
<ChildrenTestComponent header={ "This is a Header Prop!" } >
  <h3>Here are the children components passed down via props:</h3>
  <ul>
    <li>First Child</li>
    <li>Second Child</li>
    <li>Final Child</li>
  </ul>
</ChildrenTestComponent>
```

### ChildrenTestComponent Implementation

The `ChildrenTestComponent` is a functional component that receives two props: `header` and `children`. The `header` prop is a string used as a title, and the `children` prop is a special prop that represents any components or elements nested within the component tags.

```jsx
import React from 'react';

const ChildrenTestComponent = ({ header, children }) => {
    return (
        <div>
            <p>The text below is passed as a children prop:</p>
            <h1 className='text-center'>{ header }</h1>
            { children }
        </div>
    );
}

export default ChildrenTestComponent;
```

### Understanding Children Props

The `children` prop allows for dynamic content injection into a component. In this example, it renders the provided header and any children components passed down, creating a reusable and customizable component structure.

This approach is beneficial when you want to create components that can have variable content while maintaining a consistent structure.


## `MapIteration` Component

The `MapIteration` component demonstrates the use of the `.map()` method in React to iterate over an array and render each item dynamically. This is a powerful technique in React development, providing a concise and efficient way to generate elements based on the contents of an array.

## Usage in `MapIteration.jsx`

In the `MapIteration.jsx` file, a `groceryList` array is created with various grocery items. The component then uses the `.map()` method to iterate over each item in the array and generate a list item (`<li>`) for each. The `key` prop is set to the `index` to ensure React can efficiently update and re-render the list when needed.

```jsx
import React from 'react';

const MapIteration = () => {
    
    const groceryList = [ "pearl onion", "thyme", "cremini mushrooms", "butter" ];
    
    return (
        <>
            <h4>Grocery List</h4>
            
            <ul>
            { groceryList.map( (item, index) => 
                <li key={ index }>{ item }</li>
            )}
            </ul>
        </>
    );
}

export default MapIteration;
```

## Importance of `.map()` in Development

### 1. **Dynamic Rendering:**
   - `.map()` allows for the dynamic rendering of elements based on the content of an array. This is particularly useful when working with data fetched from APIs, user inputs, or any scenario where the content may change.

### 2. **Conciseness and Readability:**
   - Using `.map()` results in cleaner and more readable code compared to traditional for loops. It succinctly expresses the intent of rendering each item in the array without the need for explicit iteration and indexing.

### 3. **React's Efficient Rendering:**
   - The `key` prop assigned during mapping is crucial for React's efficient rendering. It helps React identify which items have changed, been added, or been removed. This improves performance by minimizing unnecessary re-renders.

### 4. **Easier Maintenance:**
   - When you need to update the rendering logic, having a `.map()` structure makes it easier to manage and maintain. It simplifies adding, removing, or modifying items in the array without extensive changes to the code.

### 5. **Declarative Programming:**
   - Using `.map()` aligns with the declarative programming paradigm, where you express what you want to achieve rather than the step-by-step process. It enhances code readability and promotes a more straightforward understanding of the code's purpose.

In summary, utilizing `.map()` is a fundamental practice in React development that enhances code readability, maintainability, and performance, especially when working with dynamic data. It is a key tool in creating dynamic and responsive user interfaces.





## React Styling Methods

This sections demonstrates three different methods for styling in React using buttons as an example. Each method offers a unique approach to managing styles within a React application.

### 1. Direct Import

#### File: `StyledButtonComponent1.jsx`

In this method, styles are directly imported from an external CSS file (`styles/styles.css`). The button is styled using regular CSS, and the styles are applied globally.

```jsx
// StyledButtonComponent1.jsx
import React from 'react';
import './styles/styles.css';

const StyledButtonComponent1 = ({ buttonText1 }) => {
    return (
        <div className="mb-3">
            <h3 className="fs-3 fw-bold">Direct Import</h3>
            <p>The following button is a styled button using regular CSS, and the styles used on it are shown as a result of <strong>Direct Import:</strong></p>
            <button className='styled-btn1'>{ buttonText1 }</button>
        </div>
    );
};

export default StyledButtonComponent1;
```

### 2. Inline CSS with React State

#### File: `StyledButtonComponent2.jsx`

This method uses React state and inline CSS styling to create a dynamic button. The button's appearance changes based on user interactions, such as hover and focus. React state hooks (`useState`) are employed to manage these interactions.

```jsx
// StyledButtonComponent2.jsx
import React, { useState } from 'react';

const StyledButtonComponent2 = ({ buttonText2 }) => {
    // State to manage hover and focus
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    // Event handlers
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const handleFocus = () => {
        setIsFocused(true);
    };
    
    const handleBlur = () => {
        setIsFocused(false);
    };
    
    // Inline styles based on state
    const buttonStyle = {
        backgroundColor: isHovered || isFocused ? '#155e75' : '#0891b2',
        borderRadius: '8px',
        // ... other styles removed for brevity
    };
    
    return (
        <div className="mb-3">
            <h3 className="fs-3 fw-bold">Styled Button</h3>
            <p>The following button is a styled button using React state and inline CSS styling:</p>
            <button
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {buttonText2}
            </button>
        </div>
    );
};

export default StyledButtonComponent2;
```

### 3. CSS Modules

#### File: `StyledButtonComponent3.jsx`

This method utilizes CSS Modules to encapsulate styles at the component level. Styles are imported from a CSS module file (`styles/ButtonComponent.module.css`). This approach provides local scoping of styles to avoid global conflicts.

```jsx
// StyledButtonComponent3.jsx
import React from 'react';
import styles from './styles/ButtonComponent.module.css';

const StyledButtonComponent3 = ({ buttonText3 }) => {
    return (
        <div className='mb-3'>
            <h3 className="fs-3 fw-bold">CSS Modules</h3>
            <p>A third approach overcomes a number of the problems of the first two:</p>
            <button className={ styles['styled-btn3'] }>{ buttonText3 }</button>
        </div>
    );
};

export default StyledButtonComponent3;
```

Note when using CSS Modules:
- The CSS module file must end in "module.css" for this method to work.
- CSS Module class names cannot be hyphenated, so camel casing is used by convention.
- CSS Modules offer advantages such as the ability to use media queries and complete encapsulation at the component level.

---
<p align="right">Updated: ２０２３年１２月０６日（水）</p>