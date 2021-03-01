function ProductCard(props) {
    return <div className="ProductCard">
        <img src={props.image} alt=""/>
        <h3><strong>{props.title}</strong></h3>
        <h3>{props.price}</h3>
        <button>View details</button>
    </div>
}

export default ProductCard;