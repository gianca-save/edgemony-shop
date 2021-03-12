import { PropTypes } from "prop-types";

import "./ProductModal.css"

function ProductModal({ content, closeModal, isOpen, cart, setCart, onClickAdd, onClickRemove }) {
  const productId=content.id
  const toggleCart = () => {
    if (isAlreadyInCart()) {
      onClickRemove(productId);
    } else {
      onClickAdd(productId);
    }
  }
  return (
    <div className={`ProductModal ${ isOpen ? `isOpen` : '' }`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">
        <button onClick={closeModal} title="close product modal" className="close">×</button>
        { !!content ? (
          <div className="content">
            <img src={content.image} alt={content.title} />
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <button type="button" className="addToCart" onClick={toggleCart}>{ isAlreadyInCart() ? 'Remove to Cart -' : 'Add to Cart +'}</button>
            <br /><br />
            <hr />
            <div className="price"><small>Price:</small> {content.price}€</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

ProductModal.propTypes = {
  product: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};

export default ProductModal;