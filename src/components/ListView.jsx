import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';

const ListView = ({products}) => {
  return (
    <>
      {products.map((item) => {
        const {id,name , image, price, description} = item;
        return(
          <div className="product-card radius-8 pd-16 product-grid col-gap-24">
            <figure className="product-card_figure">
              <img src={image} alt = {name} />
            </figure>
            <div className="product-card_content">
              <h4>{name.substring(0, 20)}</h4>
              <div className='mt-12 mb-12'>
                {description}
              </div>
              <div className="fs-h4 ff-medium mb-16"><FormatPrice price={price}/></div>
              <Link to={`/productdetails/${id}`} className="btn btn-sm btn-primary is-capitalize">Buy now</Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ListView