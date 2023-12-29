# D15: Starting a Full-Stack MERN Project

<div style="display: flex; justify-content: space-between;">
    <p>Week 5 Session 3</p>
    <p>２０２３年１２月２７日（水）</p>
</div>

### Table of Contents
- 


Notes:
- timestamps are important! Timestamps are needed for mongoose to manage createdAt and updatedAt entries
```js
// ...rest of the code removed for brevity
const ShowSchema = new mongoose.Schema({
    /* Show attributes ... */
}, { timestamps : true });

// ...code removed for brevity
```

- in the server install CORS as the browser by default considers this an unsafe practice and requires the api server to specifically allow this type of request
    - (explain what this is)
    ```bash
    npm install cors
    ```
- start adding the front end by installing react via vite
- displaying errors in from the backend to the front end (CreateShowForm.jsx)
    - ensure `.catch()` error responds with status code 400, and just the error object param
    - set the errors