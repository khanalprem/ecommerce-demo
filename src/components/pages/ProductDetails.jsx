import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext ";
import FormatPrice from "../../helpers/FormatPrice";
import ProductImages from "../ProductImages";
import RatingStar from "../RatingStar";
import AddToCart from "../AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const ProductDetails = () => {
 const {singleProduct, getSingleProduct} = useProductContext();
 const {id} = useParams();
 const {id:alias,name, image,description,price, stars, reviews, stock,category} = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  },[]);

  return (
    <div className="container">
      <div className="col-two">
        <div className="product-details_figure">
          <ProductImages imgs = {image}/>
        </div>
        <div className="product-details_content">
          <h2>{name}</h2>

          <div>
            <span className="mr-8 is-capitalize ff-medium">
              {category}
            </span>
            <RatingStar reviews={reviews} stars={stars} />
          </div>
          <div className="product-price fs-h2 mt-16">
            <FormatPrice price={price}/>
          </div>
          <div className="inStock">
            <span>Available :</span>
            <span className="ml-4">{stock > 0 ? 'In Stock' : 'Not Available'}</span>
          </div>
          <div className="product-des mt-16">
            <p>{description}</p>
          </div>
          <div className="mt-20">
            {stock > 0 && <AddToCart product={singleProduct}/>}
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
