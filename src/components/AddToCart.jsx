import React, { useState } from 'react'
import {MdDone} from 'react-icons/md'
import { Link } from 'react-router-dom';
import Qty from './Qty';

const AddToCart = ({product}) => {
  const {id, colors, stock} =  product;
  const [color,setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }
  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }
  return (
  <>
  <div className="qty-update mb-16">
  <Qty quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease}/>
  </div>
  <div className="product-colors is-flex is-start is-align-center col-gap-12 mb-28">
    <span>colors :</span>
    <div className="is-flex is-start is-align-center col-gap-8">
      {
        colors.map((curColor, index) =>{
          return(
            <div className={`is-square is-square_xs is-square_circle ${color === curColor ? 'active':''}`} key={index} onClick={()=>setColor(curColor)}
            style={{backgroundColor:curColor}}>
                {
                  color === curColor ? <MdDone/> : null
                }
            </div>
          )
        })
      }
    </div>
    
  </div>
  <div className="buy-btns">
  <Link to="/cart" className="btn btn-secondary btn-sm is-capitalize">
            Add to cart
    </Link>
  </div>
  
  </>
  )
}

export default AddToCart