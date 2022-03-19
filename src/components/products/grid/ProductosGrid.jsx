import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getUserToken } from "../../../helpers/session.storage";

const Productos = () => {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    const loginUser = async (credentials) => {
      const products = await (
        await fetch("http://localhost:5000/api/v1/products", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getUserToken(),
          },
        })
      ).json();
      setProducts((currentProductos) => [...productos, ...products]);
    };
    loginUser();
  }, []);

  return (
    <>
      <div className="carta-grid">
        {productos.map((producto) => {
          return (
            <ProductItem
              key={producto.id}
              name={producto.name}
              description={producto.description}
              unitPrice={producto.unitPrice}
            />
          );
        })}
      </div>
    </>
  );
};

export default Productos;
