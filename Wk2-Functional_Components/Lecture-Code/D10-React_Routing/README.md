# D10: React Routing

<div style="display: flex; justify-content: space-between;">
    <p>Week 4 Session 1</p>
    <p>２０２３年１２月１１日（月）</p>
</div>

### Table of Contents

This is a simple example demonstrating the usage of `react-router-dom` in a React application. React Router DOM is a library that enables navigation and routing in React applications.

- [Installation](#installation)
- [Components](#components)
  - [App.jsx](#appjsx)
  - [Homepage.jsx](#homepagejsx)
  - [About.jsx](#aboutjsx)
  - [RenderWord.jsx](#renderwordjsx)
  - [Form.jsx](#formjsx)
  - [RenderFormInputs.jsx](#renderforminputsjsx)
- [React Router DOM Concepts](#react-router-dom-concepts)
  - [BrowserRouter](#browserrouter)
  - [Routes](#routes)
  - [Route](#route)
  - [Link](#link)
  - [useParams](#useparams)
  - [useNavigate](#usenavigate)
  - [String Interpolation within Paths](#string-interpolation-within-paths)


## Installation

To get started with `react-router-dom`, you can install it using npm:

```bash
npm install react-router-dom
```

## Components

### App.jsx

The `App` component is the main component that sets up the overall structure of the application. It utilizes various components and concepts from `react-router-dom` to enable navigation and rendering of different views.

### Homepage.jsx

The `Homepage` component is a simple component rendering a heading for the homepage.

### About.jsx

The `About` component is another simple component rendering a heading for the about page.

### RenderWord.jsx

The `RenderWord` component demonstrates the usage of `useParams` to access parameters from the route. It displays the user's inputted word and color.

### Form.jsx

The `Form` component includes a form with color and number inputs. On submission, it uses the `useNavigate` hook to navigate to the `RenderFormInputs` component, passing the color and number parameters.

### RenderFormInputs.jsx

The `RenderFormInputs` component uses `useParams` to access color and id parameters from the route. It renders a colored box and displays the color and number.

## React Router DOM Concepts

### BrowserRouter

The `BrowserRouter` component is a wrapper that provides the context for routing in your application. It enables the use of features like `Route`, `Link`, and `useParams`.

### Routes

The `Routes` component is a container for your route definitions. It allows you to define multiple `Route` components within it.

### Route

The `Route` component defines a route within your application. It associates a specific path with a React component that should be rendered when the path matches.

### Link

The `Link` component is used for navigation within your application. It creates a hyperlink to another route defined in your `Routes` component.

### useParams

The `useParams` hook is used to access parameters from the current route. It returns an object containing key-value pairs of parameters.

### useNavigate

The `useNavigate` hook is used to programmatically navigate to different routes in your application. It returns a navigate function that can be invoked with the desired route.

### String Interpolation within Paths

String interpolation is used within paths to dynamically include values from variables or parameters. For example, in the `Route` component, paths like `/word/:usersword/:color` utilize string interpolation to include dynamic values from the route.

```jsx
<Route path="/word/:usersword/:color" element={<RenderWord />} />
```

In the above example, `:usersword` and `:color` are placeholders that get replaced with actual values from the route during navigation.
