# Convert to Arrow Function

In the **Convert to Arrow** project, the original JavaScript functions have been converted to arrow functions. This README.md explains the changes made and the reasons behind their effectiveness.

### Synopsis

This project involves an HTML page with various JavaScript functionality, which has been updated to use arrow functions. Arrow functions are a concise way to write functions in JavaScript, especially when the function body consists of a single expression.

## Code Changes

### Button Click Event

#### Original JavaScript:
```javascript
document.getElementById("button").onclick = function() {
    setBackgroundColorById("paragraph", "blue");
}
```

#### Updated Arrow Function:
```javascript
document.getElementById("button").onclick = () => {
    setBackgroundColorById("paragraph", "blue");
}
```

**Explanation:** The original function is a simple click event handler that changes the background color of the paragraph with the ID "paragraph" to blue. By converting it to an arrow function, the code remains concise and still accomplishes the same task.

### Alert Button

#### Original JavaScript:
```javascript
document.getElementById("alert").onclick = function(){
    alert(document.getElementById("popup-input").value);
}
```

#### Updated Arrow Function:
```javascript
document.getElementById("alert").onclick = () => {
    alert(document.getElementById("popup-input").value);
}
```

**Explanation:** The original function displays an alert with the value of the input with the ID "popup-input." By using an arrow function, the code retains its simplicity and continues to function as intended.

### Hover Effect

#### Original JavaScript:
```javascript
document.getElementById("hover-this").onmouseover = function(){
    setBackgroundColorById("body", "red");
}
document.getElementById("hover-this").onmouseout = function(){
    setBackgroundColorById("body", "white");
}
```

#### Updated Arrow Functions:
```javascript
document.getElementById("hover-this").onmouseover = () => {
    setBackgroundColorById("body", "red");
}
document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "white");
}
```

**Explanation:** The original code changes the background color of the "body" element to red on mouseover and white on mouseout. Arrow functions are used to replace the functions assigned to the "onmouseover" and "onmouseout" events, maintaining the desired functionality while making the code more concise.

### Utility Functions

The utility functions used in the HTML page have also been updated to arrow functions:

#### Original JavaScript:
```javascript
function getValueFromId(id){
    return document.getElementById(id).value;
}

function setBackgroundColorById(id, color){
    document.getElementById(id).style = "background-color: " + color;
}

function mouseOverFunction(el){
    el.style = "background-color: black";
}
```

#### Updated Arrow Functions:
```javascript
const getValueFromId = (id) => document.getElementById(id).value;

const setBackgroundColorById = (id, color) => document.getElementById(id).style = "background-color: " + color;

const mouseOverFunction = (el) => el.style = "background-color: black";
```

**Explanation:** The utility functions, `getValueFromId`, `setBackgroundColorById`, and `mouseOverFunction`, have been converted to arrow functions, preserving their functionality while improving code readability.


## Conclusion

In the "Convert to Arrow" project, the original JavaScript functions have been successfully replaced with arrow functions. These changes not only make the code more concise but also maintain the same functionality, demonstrating the use of arrow functions in JavaScript.

---
<p align="right">Completed: ２０２３年１１月０９日（木）</p>