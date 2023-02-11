import React from 'react';
import ListToggle from '../ListToggle';
import ProductList from "../ProductList";


const ProductCategory = () => {
  
  return (
    <>
    <div className="category-container container">
       <div className="product-sidebar">
          sidebar filter
       </div>
       <div className="main-product">
         
          <ListToggle/>
          <ProductList/>
       </div>
    </div>
    </>
  )
}

export default ProductCategory