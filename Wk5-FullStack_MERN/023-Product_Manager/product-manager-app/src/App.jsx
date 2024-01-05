import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DisplayProducts from './components/DisplayProducts'
import DisplayOne from './components/DisplayOne';
import HeaderStyled from './components/styles/Header.styled'
import Button from './components/styles/Button.styled';
import CreateProductForm from './components/CreateProductForm';
import EditProductForm from './components/EditProductForm';

function App() {
  const [ products, setProducts ] = useState([]);
  
  return (
    <>
      <BrowserRouter>
        
        <HeaderStyled>
          <h1 className='text-3xl font-bold font-serif text-indigo-400 dark:text-indigo-300'>
            <a href="/">23 Product Manager</a>
          </h1>
          <nav className='flex justify-center items-center gap-4 mt-4 sm:mt-0'>
            <Link to={"/product/create-new"}>
              <Button>+ New Product</Button>
            </Link>
          </nav>
        </HeaderStyled>
        
        <div className="container mx-auto">
          <Routes>
            <Route path={"/"} element={<DisplayProducts productList={products} setProductList={setProducts} />} />
            <Route path={"/product/details/:id"} element={<DisplayOne />} />
            <Route path={"/product/create-new"} element={<CreateProductForm />} />
            <Route path={"/product/edit-details/:id"} element={<EditProductForm />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
