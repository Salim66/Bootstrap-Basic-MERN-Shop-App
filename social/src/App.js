import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/product/Product';
import CreateProduct from './pages/product/CreateProduct';
import Shop from './pages/shop/Shop';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllProduct } from './redux/product/action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
    axios.get('http://localhost:5050/api/v1/product')
    .then(res => {
      dispatch(getAllProduct(res.data));
    })
    .catch(err => {
      console.log(err.message);
    })

  });

  return (
    <>
      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="/create" element={ <CreateProduct /> } />
      </Routes>
    </>
  );
}

export default App;
