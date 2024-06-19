import { useParams } from "react-router-dom";
import { products } from "../utils/data";
import { useEffect, useState } from "react";
import { type Product } from "../utils/types";

export function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      setProduct(
        products.find((product) => product.id === parseInt(id)) || null
      );
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-5xl font-bold mb-4">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="text-6xl font-bold">{product.price}</p>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
}
