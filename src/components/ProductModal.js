import propTypes from 'prop-types';

import "./ProductModal.css"

function ProductModal(props) {
    return props.isOpen ? (<div className='ProductModal'>
    <div className="overlay" onClick={() => props.closeModal()}></div>
    <div className="modal-content">
    <button onClick={() => props.closeModal()}>X</button>
        <img src={props.img} alt=""/>
        <h2><strong>{props.title}</strong></h2>
        <h3>{props.description}</h3>
        <footer>
            <h2>{props.price}</h2>
        </footer>
    </div></div>) : null;
};

ProductModal.propTypes = {
        /* product: propTypes.object.isRequired, */
        isOpen: propTypes.bool.isRequired,
        closeModal: propTypes.func.isRequired
    };

export default ProductModal;