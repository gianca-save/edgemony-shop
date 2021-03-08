import propTypes from 'prop-types';

import "./ProductModal.css"

function ProductModal({isOpen, closeModal, img, title, description, price, addToCart, cart}) {
    return isOpen ? (<div className='ProductModal'>
    <div className="overlay" onClick={() => closeModal()}></div>
    <div className="modal-content">
    <button onClick={() => closeModal()}>X</button>
        <img src={img} alt=""/>
        <h2><strong>{title}</strong></h2>
        <h3>{description}</h3>
        <footer>
            <h2>{price}</h2>
            <button onClick={addToCart(...cart, img)}>Add to Cart</button>
        </footer>
    </div></div>) : null;
};

ProductModal.propTypes = {
        /* product: propTypes.object.isRequired, */
        isOpen: propTypes.bool.isRequired,
        closeModal: propTypes.func.isRequired
    };

export default ProductModal;