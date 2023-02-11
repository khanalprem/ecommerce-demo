import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const GridView = ({ products }) => {
  return (
      <div className="grid grid-cols_4 mt-24">
        {products.map((item) => {
          const { id, name, image, price } = item;
          return (
            <div className="product-card radius-8 pd-16 text-center">
              <figure className="product-card_figure">
                <img src={image} alt={name} />
              </figure>
              <div className="product-card_content mt-20">
                <h4>{name.substring(0, 20)}</h4>
                <div className="fs-h4 mb-16">
                  <FormatPrice price={price} />
                </div>
                <Link
                  to={`/productdetails/${id}`}
                  className="btn btn-sm btn-primary is-capitalize"
                >
                  Buy now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default GridView;
