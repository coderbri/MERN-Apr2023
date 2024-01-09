# D17: AlbumApp - Full-Stack MERN Project

<div style="display: flex; justify-content: space-between;">
    <p>Week 6 Session 2</p>
    <p>２０２４年０１月０２日（火）</p>
</div>

### Table of Contents
- [Project Initialization](#project-initialization)
- [Tailwind CSS Installation and Usage in a Vite React Project](#tailwind-css-installation-and-usage-in-a-vite-react-project)
- [AlbumApp Components](#albumapp-components)
    - [`DisplayAlbums.jsx`](#displayalbumsjsx)

## Project Initialization
For the project initialization, refer to the [D13-Server_Setup_w_Mongoose README](https://github.com/coderbri/MERN-Apr2023/blob/c09996835266cb9b75a5ff14c097fe49472fdf13/Wk4-Backend_Development/Lecture-Code/D13-Server_Setup_w_Mongoose/README.md) and for CORS implementation, go to this [project's README.md](https://github.com/coderbri/MERN-Apr2023/blob/f6efeda0fac558bd4b411f3d18c5a3ced068b783/Wk5-FullStack_MERN/Lecture-Code/D16-Full_CRUD_ShowApp/README.md).

<details>
<summary>Server Setup</summary>

- [**mongoose.config.js**](#mongooseconfigjs)
- [**album.model.js**](#albummodeljs)
- [**album.controller.js**](#albumcontrollerjs)
- [**album.routes.js**](#albumroutesjs)
- [**server.js**](#serverjs)

### `mongoose.config.js`

```js
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/albums_mockExam`)
    .then(() => console.log("Established a connection to the database."))
    .catch((error) => console.log("Something went wrong when connecting to the database", error));
```

### `album.model.js`

```js
const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required: [ true, 'The Album Name is required '],
        minLength: [ 3, 'The Album Name must be 3 or more characters' ],
        maxLength: [ 50, 'The Album Name is too long' ]
    },
    artist: {
        type: String,
        required: [ true, 'The Artist\'s name is required '],
        minLength: [ 3, 'The Artist\'s name must be 3 or more characters' ],
        maxLength: [ 50, 'The Artist\'s name is too long' ]
    },
    releaseYear: {
        type: Number,
        required: [ true, 'The Release Year is required' ],
        min: [ 1920, 'No albums before 1920 allowed' ]
    },
    genre: {
        type: String,
        required: [ true, '' ],
        minLength: [ 3, 'The Genre must be 3 or more characters' ],
        maxLength: [ 50, 'The Genre is too long' ]
    },
    explicit: {
        type: Boolean,
        required: [ 'Please verified if this Album is explicit or not' ]
    }
}, { timestamps: true });

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;
```


### `album.controller.js`
```js
const Album = require("../models/album.model");

module.exports = {
    findAllAlbumns: ( request, response ) => { // * READ (ALL)
        Album.find()
            .then((allAlbumData) => {
                console.log("\n=== All albums retrieved! ===\n", allAlbumData);
                response.json(allAlbumData);
            })
            .catch((err) => response.status(400).json(err));
    },
    
    createAlbum: (req, res) => { // * CREATE
        Album.create( req.body )
            .then((newAlbum) => {
                console.log("\=== Album created! ===\n", newAlbum);
                res.json(newAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    
    findOneAlbum: (req, res) => { // * READ (ONE)
        Album.findOne({ _id: req.params.id })
            .then((oneSingleAlbum) => {
                console.log("\=== Album retrieved! ===\n", oneSingleAlbum);
                res.json(oneSingleAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    
    updateOneAlbum: (req, res) => { // * UPDATE
        Album.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((updatedAlbum) => {
                console.log("\=== Album updated! ===\n", updatedAlbum);
                res.json(updatedAlbum);
            })
            .catch((err) => res.status(400).json(err));
    },
    
    deleteOneAlbum: (req, res) => { // * DELETE
        Album.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log("\=== Album deleted! ===");
                res.json({ albumStatus: result });
            })
            .catch((err) => res.status(400).json(err));
    },
}
```

### `album.routes.js`
```js
const AlbumController = require("../controllers/album.controller");

module.exports = app => {
    app.get( "/api/albums", AlbumController.findAllAlbumns ); // * READ (ALL)
    app.post( "/api/album/new", AlbumController.createAlbum ); // * CREATE
    app.get( "/api/album/:id", AlbumController.findOneAlbum ); // * READ (ONE)
    app.put( "/api/album/update/:id", AlbumController.updateOneAlbum ); // * UPDATE
    app.delete( "/api/album/delete/:id", AlbumController.deleteOneAlbum ); // * DELETE
}
```

### `server.js`
```js
const express = require('express');
const app = express();
const cors  = require("cors");

app.use(cors());
const port = 8000;

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended:true }));

const AllAlbumRoutes = require("./routes/album.routes");
AllAlbumRoutes(app);

app.listen(port, ()=>console.log(`Listening on port: ${port}`));
```
</details>


## Tailwind CSS Installation and Usage in a Vite React Project
To incorporate Tailwind CSS into a Vite React project, access the official Tailwind CSS documentation guide for Vite by visiting [Tailwind CSS - Vite](https://tailwindcss.com/docs/guides/vite).




## AlbumApp Components

**Using `BrowserRouter` in Main.jsx**: `BrowserRouter` can also be imported to `Main.jsx` for cleaner modularization of `App.jsx`’s components.
```jsx
// other imports removed for brevity
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

### `App.jsx`
This component serves as the main structure of the application, managing the overall layout, navigation, and routing. It organizes the different components responsible for displaying all albums, creating a new album, and displaying details of a single album. Here's what it includes:

1. **State Management**: The component uses the useState hook to manage state. Albums in the state variable represent an array of Products, and setProducts is the function to update this state.
    ```javascript
    import { useState } from 'react';
    
    const [ albumCollection, setAlbumCollection ] = useState([]);
    ```

2. **Header Section**: Displays a styled header (`HeaderStyled`) containing the application title as well as provides navigation links using `Link` from `react-router-dom` to navigate to the home page and the form for creating a new album.
    ```javascript
    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
    {/* App function removed for brevity... */}
    <>
        <HeaderStyled>
            <h1 className='text-3xl font-bold font-serif text-emerald-300'>
            <a href="/">D17 AlbumApp</a>
            </h1>
            <Link to={"/album/create"}>
            <AddButtonStyled />
            </Link>
        </HeaderStyled>
        
        {/* Routes... */}
    </>
    ```

3. **Routing within `App.jsx`**: Routing, facilitated by `react-router-dom`, allows the application to render different components based on the URL path. The component is entirely wrapped with `BrowserRouter` to enable routing in the application. Furthermore, the `Routes` component contains different routes which specifies a path and the corresponding component to be rendered when the path is matched.
   ```jsx
    <Routes>
        <Route path={"/"} element={<DisplayAlbums albumList={albumCollection} setAlbumList={setAlbumCollection} />} />
        <Route path={"/album/:id/view"} element={<DisplayOneAlbum />} />
        <Route path={"/album/create"} element={<CreateAlbumForm />} />
        <Route path={"/album/:id/edit"} element={<EditAlbumForm />} />
    </Routes>
   ```

4. **Component Route**: Contains the components that will display the relevant album data as well as pass the necessary the album state and the function to update it as props.

### `DisplayAlbums.jsx`

<div align="center">
<img src="./readme-assets/AlbumApp-DisplayAll.png" width="450px" height="auto">
</div>

#### Imports
```javascript
import React, { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditButton from './styles/EditButton';
import DeleteButton from './styles/DeleteButton';
```
1. **React and useEffect:** The component is built using React, and it utilizes the `useEffect` hook for handling side effects like data fetching.

2. **Link:** (Imported from `react-router-dom`) is used to create navigation links that allow the user to move between different views within the application.

3. **axios:** This library is imported for making HTTP requests. In this case, it's used to fetch data from the backend API.

4. **Styled Components:** Several styled components (`EditButton` and `DeleteButton`) are imported. These define the styling for buttons in the UI.

#### Component Setup

After the data from the backend is fetched, it is mounted to the component using `useEffect` and `axios` to render a collection of albums with stylized buttons to edit and delete entries as well as a Link to the title to access each album’s personal view page. The state is lifted up to the parent component (`App.jsx`), allowing for centralized state management. The child component receives the state and a function to update it as props.

1. **Props**: The component takes two destructured props: `albumList` and `setAlbumList`. These are used for managing the state of albums in the parent component (`App.jsx`). The list of products is passed as a prop, and the function to update this list is also passed.
   ```javascript
   const DisplayAlbums = ({ albumList, setAlbumList }) => {/* ... */}
   ```

2. **`useEffect` Hook**:
   ```javascript
   useEffect(() => {
        axios.get("http://localhost:8000/api/albums")
            .then((res) =>{
                console.log("=== All albums loaded:", res);
                setAlbumList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
   ```
   1. **Data Fetching:** The `useEffect` hook is used to perform side effects in the component. In this case, it's fetching data from the backend API.
   2. **`axios.get`**: This method makes a GET request to the specified API endpoint (http://localhost:8000/api/albums).
   3. **Promise Handling:** The then block handles the promise when it resolves. It logs the entire response and the data part of the response to the console.
   4. **Setting State:** The `setAlbumList` function is then used to update the state of managed products with the data received from the backend. The data structure can be assumed to be { albums: [...] }.
   5. **Error Handling:** The catch block logs any errors that occur during the HTTP request.

3. **Component Rendering**
    ```jsx
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>All Albums</h2>
            <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                { albumList.map((album) => (
                    <div key={album._id} className='p-4 rounded-lg bg-zinc-800'>
                        <p>test</p>
                        <hr />
                        <div className="mt-3 flex flex-col align-bottom truncate">
                            <Link to={`/album/${album._id}/view`} className="ease-out duration-200 hover:text-emerald-300 hover:font-extrabold">
                                <h3 className='font-semibold'>{ album.albumName }</h3>
                            </Link>
                            <p className='text-zinc-500 font-medium'>{ album.artist }</p>
                            <div className="flex justify-end">
                                <div className="flex items-center gap-3">
                                    <Link to={`/album/${album._id}/edit`}><EditButton /></Link>
                                    <DeleteButton onClick={() => deleteHandler(album._id)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    ```
    1. **UI Structure:** The component returns JSX that renders a section containing the header and a grid for displaying a collection of albums.
    
    2. **Mapping Over Products:** The `albumList.map()` function is used to iterate over each album in the array.
    
    3. **Product Details:** For each product, it renders a `div` containing the name of the album, its artist, a link for viewing, and buttons for editing, and deleting.
    
    4. **Navigation Link:** The `Link` component is used to create a navigation link to view the details of a specific album. It directs to the route `/album/:id/view` where `:id` is the unique identifier of the album.

### `DisplayOneAlbum.jsx` _wip_

<div align="center">
<img src="" width="450px" height="auto">
</div>

### `CreateAlbumForm.jsx` _wip_

<div align="center">
<img src="" width="450px" height="auto">
</div>

### `EditAlbumForm.jsx` _wip_

<div align="center">
<img src="" width="450px" height="auto">
</div>

### Delete Handler _wip_