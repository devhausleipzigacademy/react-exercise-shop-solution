import { CartToggle } from "./CartToggle";
import { ShoppingCart } from "./ShoppingCart";
import { CartItem } from "../utils/types";
import { NavLink } from "react-router-dom";

type Props = {
  toggleCart: () => void;
  cart: CartItem[];
  isCartVisible: boolean;
};

const navigation = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
];

export function Header({ cart, toggleCart, isCartVisible }: Props) {
  return (
    <header className="shadow-md py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold">Wacky Wonders Emporium</h1>
      <nav className="flex gap-4">
        {navigation.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
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
