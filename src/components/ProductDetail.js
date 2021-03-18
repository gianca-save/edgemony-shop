import "./ProductModal.css";

function ProductDetail({product, cart, total, setCart, setTotal}) {

    return (<div className='ProductDetail'>
    <div className="modal-content">
        <img src={product.image} alt=""/>
        <h2><strong>{product.title}</strong></h2>
        <h3>{product.description}</h3>
        <footer>
            <h2>{product.price} €</h2>
        </footer>
        <button onClick= {() => {

            setCart([...cart, product]);
            setTotal(total + product.price);
            console.log(total)
                        
        }}>Aggiungi al carrello</button>
    </div></div>);
};

export default ProductDetail;