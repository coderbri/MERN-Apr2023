import './App.css'

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
      
      <h2 className="my-class">This is an h2 tag created using proper JSX syntax</h2>
      
      <h2>A Form Sample</h2>
      <form action="#">
        <div className="form-group">
          <label htmlFor="" className='form-label'>Email:</label>
          <input type="text" name="" id="" className="form-control" />
          <input type="submit" value="Submit" className='btn btn-dark' />
        </div>
      </form>
    </>
  )
}

export default App
