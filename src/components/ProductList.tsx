import { IProduct } from "../types/Product";
import Product from "./Product";

interface Props {
  products: IProduct[];
}

function ProductList({ products }: Props) {
  return (
    <div>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
}

export default ProductList;
