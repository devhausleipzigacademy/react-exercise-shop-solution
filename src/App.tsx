import { useState } from "react";
import { CartItem, Product } from "./utils/types";
import { CartToggle } from "./components/CartToggle";
import { ShoppingCart } from "./components/ShoppingCart";
import { ProductList } from "./components/ProductList";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product: Product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function toggleCart() {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible);
  }
  return (
    <>
      <header className="shadow-md py-4 px-6 flex justify-between">
        <h1 className="text-xl font-bold">Wacky Wonders Emporium</h1>
        <div className="relative">
          <CartToggle
            toggleCart={toggleCart}
            isCartVisible={isCartVisible}
            cartItems={cart}
          />
          {isCartVisible ? <ShoppingCart cartItems={cart} /> : null}
        </div>
      </header>
      <div className="px-4 py-8">
        <ProductList addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
