import { useOutletContext } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { Product } from "../utils/types";

type OutletContext = {
  addToCart: (product: Product) => void;
};

export function Home() {
  const { addToCart } = useOutletContext<OutletContext>();

  return <ProductList addToCart={addToCart} />;
}
