import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from "react";
import { CartItem, Product } from "../utils/types";

export function RootLayout() {
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
    <div className="flex h-screen">
      <aside className="h-full bg-red-600 w-52">Sidebar</aside>
      <main>
        <Header
          toggleCart={toggleCart}
          cart={cart}
          isCartVisible={isCartVisible}
        />
        {/* Page */}
        <Outlet />
      </main>
    </div>
  );
}
