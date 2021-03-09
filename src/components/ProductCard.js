import { PropTypes } from "prop-types";


function ProductCard({ product, openProductModal }) {
  return (
    <article className="ProductCard">
      <img src={product.image} alt={product.title} />
      <div className="content">
        <h1>{product.title}</h1>
        <p>Price: {product.price}€</p>
      </div>
      <button onClick={openProductModal}>View details</button>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  openProductModal: PropTypes.func.isRequired,
};

export default ProductCard;