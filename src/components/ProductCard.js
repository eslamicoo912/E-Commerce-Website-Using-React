import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleProClick }) => {
  const { id, title, price, rating, image } = product;
  return (
    <div to={`/product${id}`} className="col-md-3">
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <img src={image} alt="Product" className="img-responsive" />
        </div>
        <div className="wsk-cp-text">
          <div className="category">
            <span>{rating.rate}</span>
          </div>
          <div className="title-product">
            <h3>{title}</h3>
          </div>
          <div className="description-prod">
            <p>
              Description Product tell me how to change playlist height size
              like 600px in html5 player. player good work now check this link
            </p>
          </div>
          <div className="card-footer">
            <div className="wcf-left">
              <span className="price">{price}</span>
            </div>
            <div className="wcf-right">
              <Link to={`/product${id}`} className="btn-cont">
                <button className="read-btn" onClick={() => handleProClick(id)}>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
