function ProductCard({product, setProductDetail, openCloseModal}) {

    return <div key={product.id} className="ProductCard">
        <img src={product.image} alt=""/>
        <h3><strong>{product.title}</strong></h3>
        <h3>{product.price} €</h3>
        <button onClick= { ()=> { 
             setProductDetail(product);
             openCloseModal(true) } }>
        View details
        </button>
    </div>
}
export default ProductCard;