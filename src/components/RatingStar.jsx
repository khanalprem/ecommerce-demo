import React from 'react';
import {MdStar,MdStarOutline,MdStarHalf} from 'react-icons/md'

const RatingStar = ({reviews, stars}) => {
  const ratingStar = Array.from({length:5},(item,i) =>{
    let number = i + 0.5;
    return(
      <span key={i}>
        {stars > i + 1 ? <MdStar/> : stars > number ? <MdStarHalf/> : <MdStarOutline/>}
      </span>
    )
  })
  return (
    <div className="is-flex is-start is-align-center rating-stars">
      {ratingStar}
      <span className="ml-4">{reviews} customers reviews</span>
    </div>
  )
}

export default RatingStar