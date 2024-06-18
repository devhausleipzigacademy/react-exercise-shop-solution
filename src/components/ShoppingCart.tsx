import { CartItem } from "../utils/types";

type Props = {
  cartItems: CartItem[];
};
export function ShoppingCart({ cartItems }: Props) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute right-0 top-10 shadow-sm bg-white border border-zinc-400 p-4 w-max">
      <h2 className="font-semibold underline mb-1">Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} -{" "}
            <span className="font-bold">{`${item.quantity} ${
              item.quantity > 1 ? "pcs" : "pc"
            }`}</span>
          </li>
        ))}
      </ul>
      <h3 className="border-t border-zinc-400 mt-2">
        Total Price: ${totalPrice.toFixed(2)}
      </h3>
    </div>
  );
}
