import { Product } from "../utils/types";

type Props = {
  id: number;
  name: string;
  price: number;
  description: string;
  addToCart: (product: Product) => void;
};

export function ProductItem({
  price,
  addToCart,
  id,
  name,
  description,
}: Props) {
  return (
    <li className="border border-zinc-400 shadow-md rounded p-4 flex flex-col justify-between items-start">
      <div>
        <div className="flex items-end justify-between mb-3">
          <h3 className="font-bold">{name}</h3>
          <p className="font-bold text-xl">{price}</p>
        </div>
        <p className="mb-4">{description}</p>
      </div>
      <button
        className="self-end bg-zinc-800 text-zinc-50 px-3 py-1 rounded transition hover:bg-zinc-950"
        onClick={() => addToCart({ id, name, price })}
      >
        Add to Cart
      </button>
    </li>
  );
}
