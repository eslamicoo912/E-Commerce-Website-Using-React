import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [currentId, setCurrentId] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    const response = await fetch(url);
    const productsData = await response.json();
    setData(productsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleProClick(currentid) {
    setCurrentId(currentid);
  }

  function handleCartClick(id) {
    cartData.map((item) => {
      item.map((pro) => {
        if (pro.id === id) {
          alert("You've Alreade Added It Before");
        }
      });
    });
    const temp = cartData;
    const product = data.filter((item) => {
      return item.id === id;
    });
    temp.push(product);
    setCartData(temp);
  }

  function handleClear() {
    setCartData([]);
  }

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProductsList
              data={data}
              handleProClick={(id) => handleProClick(id)}
            />
          }
        />
        <Route
          path={`/product${currentId}`}
          element={
            <ProductDetails
              handleCartClick={(id) => handleCartClick(id)}
              id={currentId}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart data={cartData} handleClear={handleClear} />}
        />
      </Routes>
    </div>
  );
}

export default App;
