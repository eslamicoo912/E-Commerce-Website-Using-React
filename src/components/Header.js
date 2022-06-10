import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container header mt-5">
      <h1>E-Commerce By Eslam Ashraf</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Header;
