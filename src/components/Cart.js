import PropTypes from "prop-types";

import "./Cart.css";

function Cart({ cart, products }) {
  const totalPrice = cart.reduce((acc, cartItem) => {
    const product = products.find(product => product.id === cartItem.id )
    return acc + product.price
  }, 0).toFixed(2)
    
  return (
    <div className="Cart">
      { !!cart.length && <span className="price">{totalPrice}€</span> }
      <span className="icon">
        <i className="fas fa-shopping-cart"></i>
        { !!cart.length && <span className="qty">{cart.length}</span> }
      </span>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default Cart;