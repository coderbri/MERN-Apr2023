# First React

### Description
This project serves as an introduction to React, demonstrating the basic setup and rendering of a simple React component.

## Installation
No specific installation steps are required. The project uses external scripts for React from unpkg.com.

## Usage
1. Open `index.html` in your browser.
2. You will initially see an `<h1>` tag saying "First React page rendering...".
3. After the React scripts load, it quickly changes to "Our First React page has rendered".

## Project Structure
- **index.html**: The main HTML file containing the structure of the web page.
- **React Scripts**: External scripts for React from unpkg.com.
- **Custom React Script**: The additional script containing React code to render a custom component.

## Custom React Script Explanation
The custom React script, located after the external React scripts, uses the `React.createElement` method to create a React element (`h1` in this case). It then renders this element using `ReactDOM.render` within the HTML element with the id "root".

```javascript
const App = React.createElement("h1", {}, "Our First React page has rendered");
ReactDOM.render(App, document.getElementById("root"));
```

- The first argument specifies the HTML element type.
- The second argument is for props (not used in this example).
- The third argument is the content to be rendered within the element.

## Note
Refreshing the page will quickly toggle between "First React page rendering..." and "Our First React page has rendered."

---
<p align="right">Completed: ２０２３年１１月１０日（金）</p>
