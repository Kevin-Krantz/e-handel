import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { getFoods } from "./services/fakeFoodService";
import { IProduct } from "./types/Product";

function App(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(getFoods());
  }, []);

  return <ProductList products={products} />;
}

export default App;
