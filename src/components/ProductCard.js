import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleProClick }) => {
  const { id, title, price, rating, image } = product;
  return (
    <div to={`/product${id}`} className="my-5 col-3 pro-card mb-5 pb-5 mx-5">
      <img src={image} alt="" className="img-fluid pro-img" />
      <h3 className=" py-4 ">{title}</h3>
      <p className="price">${price}</p>
      <p className="rating">{rating.rate}</p>
      <Link to={`/product${id}`} className="pro-card mb-5 pb-5">
        <button
          onClick={() => handleProClick(id)}
          className="btn btn-lg btn-primary "
        >
          Read More
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
