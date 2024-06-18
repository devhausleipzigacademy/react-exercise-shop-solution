import { products } from "../utils/data";
import { Product } from "../utils/types";
import { ProductItem } from "./ProductItem";

type Props = {
  addToCart: (product: Product) => void;
};

export function ProductList({ addToCart }: Props) {
  return (
    <div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}
