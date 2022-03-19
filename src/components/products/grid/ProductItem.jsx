const ProductItem = ({ name, description, unitPrice }) => {
  return (
    <div className="carta">
      <p>
        <b>Nombre: </b>
        <span>{name}</span> <br />
        <b>Precio: </b>
        <span>{unitPrice}</span>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default ProductItem;
