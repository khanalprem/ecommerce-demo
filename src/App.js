import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './scss/style.scss';
import {Home, ProductCategory, ProductDetails,Cart, Contact,About, ErrorPage} from './components/pages';
import Navbar from './components/header/Navbar';

const App = ()  => {
  return (
    

    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/productcategory' element = {<ProductCategory/>} />
      <Route path = '/productdetails/:id' element = {<ProductDetails/>} />
      <Route path = '/cart' element = {<Cart/>} />
      <Route path = '/about' element = {<About/>} />
      <Route path = '/contact' element = {<Contact/>} />
      <Route path = '*' element = {<ErrorPage/>} />
    </Routes>

  
  );
}

export default App;
