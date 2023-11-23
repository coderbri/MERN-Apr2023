# Learn React Project

### Table of Contents
1. [App Component](#app-component)
    1. [Product Component](#3-product-component)
    2. [UserForm Component](#2-userform-component)
        1. [Form State Management](#form-state-management)
        2. [Form Submission](#form-submission)
        3. [Form Input Fields](#form-input-fields)
        4. [Submit Button](#submit-button)
    


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

## 1. Product Component

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

## 2. UserForm Component

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

---
<p align="right">Updated: ２０２３年１１月２３日（木）</p>