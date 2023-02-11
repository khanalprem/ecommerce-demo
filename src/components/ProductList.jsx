import React,{useEffect} from 'react'
import { useProductContext } from '../context/ProductContext ';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const {filter_products,grid_view} = useProductContext();
  
  if (grid_view) return <GridView products={filter_products} /> 
  else return <ListView products={filter_products} />
}

export default ProductList