import { useState } from "react";
import { CartItem, Product } from "./utils/types";
import { CartToggle } from "./components/CartToggle";
import { ShoppingCart } from "./components/ShoppingCart";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="px-4 py-8">
        <ProductList addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
