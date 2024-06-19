import { CartToggle } from "./CartToggle";
import { ShoppingCart } from "./ShoppingCart";
import { CartItem } from "../utils/types";

type Props = {
  toggleCart: () => void;
  cart: CartItem[];
  isCartVisible: boolean;
};

export function Header({ cart, toggleCart, isCartVisible }: Props) {
  return (
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
  );
}
