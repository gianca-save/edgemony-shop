import ProductModal from './ProductModal.js'

function ProductCard(props) {

    return <div key={props.id} className="ProductCard">
        <img src={props.image} alt=""/>
        <h3><strong>{props.title}</strong></h3>
        <h3>{props.price}</h3>
        <button onClick= { () => {
            return <ProductModal image={props.image} title={props.title} description={props.description} price={props.price} />

        }}>View details</button>
    </div>
}

export default ProductCard;