import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ data, handleClear }) => {
  let list;
  for (let i = 0; i < data.length; i++) {
    list += data[i].map((item) => {
      return <h3>{item.title}</h3>;
    });
  }

  return (
    <div className="cart container">
      {data.map((item) => {
        return item.map((it) => {
          return (
            <div className="my-5 cart-cont" key={it.id}>
              <h4>{it.title}</h4>
              <Link className="ps-5" to={`/product${it.id}`}>
                Read More
              </Link>{" "}
            </div>
          );
        });
      })}
      <button
        className={data.length > 0 ? "btn btn-lg btn-danger" : "hiddenBtn"}
        onClick={handleClear}
      >
        Clear All
      </button>
    </div>
  );
};

export default Cart;
