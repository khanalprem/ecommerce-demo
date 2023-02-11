import React from 'react'
import { useProductContext } from '../context/ProductContext '
import Product from "./Product"

const FeatureProducts = () => {
  const {isLoading,featuredProducts} = useProductContext();

  if(isLoading){
    <div className='container'>
      <div className="is-flex is-center">
        <h2>...Loading</h2>
      </div>
    </div>
  }
  return (
    <div className='container'>
      <div className='section-title mb-32'>
        <h2>Featured Products</h2>
      </div>
      <div className='grid grid-cols_4'>
          {featuredProducts.map((item) => {
            return(
              <Product key={item.id} {...item}></Product>
            )
          })}
      </div>
    </div>
  )
}

export default FeatureProducts