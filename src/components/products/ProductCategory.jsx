import ProductosGrid from "./grid/ProductosGrid";
import "./product.style.css";

const ProductCategory = () => {
  return (
    <div>
      <h1 style={{ alignItems: "center" }}>Productos</h1>
      <ProductosGrid />
    </div>
  );
};

export default ProductCategory;
