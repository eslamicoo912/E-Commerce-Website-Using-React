import React, { useState, useEffect } from "react";

const ProductDetails = ({ id, handleCartClick }) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const [currentProduct, setcurrentProduct] = useState({});
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const pro = await response.json();
    setcurrentProduct(pro);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div key={currentProduct.id} className="pro-details">
      <div className="me-5 pe-5">
        <img src={currentProduct.image} alt="" className="img-fluid w-75" />
      </div>
      <div className="pro-info ms-5 ps-5 w-50">
        <h2>{currentProduct.title}</h2>
        <h3>{currentProduct.category}</h3>
        <p className="py-3 w-75">{currentProduct.description}</p>
        <h4>${currentProduct.price}</h4>
        <button
          className={clicked ? "hiddenBtn" : "btn btn-lg btn-success mt-3"}
          onClick={() => {
            handleCartClick(id);
            setClicked(true);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

/* 
<h1>Detail</h1>
      
*/
