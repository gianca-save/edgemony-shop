import "./ProductModal.css"

function ProductModal({product, setProduct, isModalOpen, openCloseModal}) {

    function exitModal() {
        setProduct(undefined);
        openCloseModal(false);
    }

    return isModalOpen ? (<div className='ProductModal'>
    <div className="overlay" onClick={() => exitModal()}>
        </div>
    <div className="modal-content">
    <button onClick={() => exitModal()}>X</button>
        <img src={product.image} alt=""/>
        <h2><strong>{product.title}</strong></h2>
        <h3>{product.description}</h3>
        <footer>
            <h2>{product.price}</h2>
        </footer>
    </div></div>) : null;
};

export default ProductModal;