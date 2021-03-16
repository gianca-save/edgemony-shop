import "./ProductModal.css";

function ProductDetail({product, setProduct, openCloseModal, isModalOpen}) {

    return isModalOpen ? (<div className='ProductDetail'>
    <div className="modal-content">
        <img src={product.image} alt=""/>
        <h2><strong>{product.title}</strong></h2>
        <h3>{product.description}</h3>
        <footer>
            <h2>{product.price} €</h2>
        </footer>
    </div></div>) : null;
};

export default ProductDetail;