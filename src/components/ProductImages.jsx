import React, { useEffect, useState } from 'react'

const ProductImages = ({imgs = [{url:""}]}) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  useEffect(() => {
    if(imgs.length){
      setMainImage(imgs[0]);
    }
  },[imgs]);
  return (
    <>
    <div className="product-details_figure" style={{display:'flex', justifyContent:'flex-start',alignItems:'center',columnGap:'1.5rem'}}>
    <div className="vr-figure" style={{maxWidth:'120px',display:'flex', justifyContent:'flex-start',alignItems:'center',rowGap:'1rem', flexDirection:'column' }} >
          {imgs.map((item ,i) => {
            return (
              <figure key={i} onClick={() => setMainImage(item)}>
                <img src={item.url} alt={item.filename} />
              </figure>
            )
          })}
    </div>
    <figure className="main-figure flex-grow">
          <img src={mainImage.url} alt={mainImage.filename} />
    </figure>
    </div>
    </>
  )
}

export default ProductImages