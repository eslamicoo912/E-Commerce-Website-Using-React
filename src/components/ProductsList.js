import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = (props) => {
  const list = props.data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        product={item}
        handleProClick={(id) => props.handleProClick(id)}
      />
    );
  });
  return <div className="pro-list row m-auto w-75 my-5 py-5">{list}</div>;
};

export default ProductsList;
