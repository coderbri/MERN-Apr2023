# Prop it Up

**Prop it Up** is a simple React application designed to help you learn the fundamentals of using components and passing data through props in a React application. In this project, we have an `App` component that renders multiple instances of the `PersonCard` component, each displaying information about a person.

<details>
  <summary>Getting Started with this Vite/React App</summary>
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
    npm run dev
    ```
</details>

## App Component

The **`App`** component, located in **App.jsx**, serves as the main entry point for our application. It includes a header and renders multiple instances of the `PersonCard` component with different sets of props.

### App.jsx

```jsx
import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
      <header className="bg-dark text-center text-light py-2 mb-4">
        <h1 className='fw-medium'>006 Prop it Up</h1>
      </header>
      
      <PersonCard
        firstName={"Jane"} lastName={"Doe"}
        age={ 45 } hairColor={'Black'}
      />
      <PersonCard
        firstName={"John"} lastName={"Smith"}
        age={ 88 } hairColor={'Brown'}
      />
      <PersonCard
        firstName={"Millard"} lastName={"Fillmore"}
        age={ 50 } hairColor={'Brown'}
      />
      <PersonCard
        firstName={"Maria"} lastName={"Smeetz"}
        age={ 62 } hairColor={'Brown'}
      />
      
    </>
  )
}

export default App
```

## PersonCard Component

The **`PersonCard`** component, located in **`PersonCard.jsx`**, is a reusable component that receives props (`firstName`, `lastName`, `age`, and `hairColor`) and displays information about a person in a styled card.

### PersonCard.jsx

```jsx
import React from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
        <div className='col-4 mx-auto text-start mb-2'>
            <h2 className='fw-bold'>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
        </div>
    );
}

export default PersonCard;
```

## How it Works

1. **App Component**: Renders a header and multiple instances of the `PersonCard` component.

2. **PersonCard Component**: Receives props (`firstName`, `lastName`, `age`, `hairColor`) and displays the person's information in a styled card.

3. **Props**: Props are used to pass data from the `App` component to each instance of the `PersonCard` component, allowing for dynamic content.

<!-- --- -->
<p align="right">Completed: ２０２３年１１月１２日（日）</p>