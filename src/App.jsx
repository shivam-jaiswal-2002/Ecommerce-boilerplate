import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Layout from "./Layout";
import Header from "./Header";
import LoginPage from "./Pages/LoginPage";
import ProductsPage from "./Pages/ProductsPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductInfo from "./Pages/ProductInfo";
import { CartProvider } from "./CartContext";
import MyCart from "./Pages/MyCart";
import FavoritePage from "./Pages/FavoritePage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return(
    
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/products" element={<ProductsPage products={products} />} />
          <Route path="/products/:productId" element={<ProductInfo products={products} />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/fav" element={<FavoritePage/>} />
        </Route>
      </Routes>
    </CartProvider>

    </BrowserRouter>
  );
}

export default App;
