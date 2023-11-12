# First React with JSX

**First JSX** is a basic React app that demonstrates the use of components. The main component in this app is `FirstComponent`, which displays a list of tasks.

In React, components are the building blocks of a user interface, allowing you to split the UI into independent and reusable pieces. Each component can manage its state and behavior, making the application more modular and easier to maintain.

<details>
  <summary>Getting Started</summary>
    To run this app locally, follow these steps:
    
    1. Clone the repository:
    
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

    2. Install dependencies:
    
    ```bash
    npm install
    ```

    3. Run the app:
    
    ```bash
    npm start
    ```
</details>


## Components

### App.js

The `App.js` file is the entry point of the application. It imports and renders the `FirstComponent`:

```jsx
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
    </div>
  );
}

export default App;
```

### FirstComponent.jsx

The `FirstComponent.jsx` file defines the `FirstComponent` React component. It uses Bootstrap for minimal styling:

```jsx
import React from 'react';

const FirstComponent = () => {
    return (
        <div className='px-3 pt-3'>
            <h1 className='fw-bold'>Hello Dojo!</h1>
            <h2 className='fw-semibold'>Things I need to do:</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a Mountain</li>
                <li>Feed the dogs</li>
            </ul>
        </div>
    );
}

export default FirstComponent;
```

---
<p align="right">Completed: ２０２３年１１月１２日（日）</p>