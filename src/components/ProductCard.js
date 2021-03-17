import {Link} from 'react-router-dom';

function ProductCard({product, setProductDetail, openCloseModal}) {

    return <div key={product.id} className="ProductCard">
        <img src={product.image} alt=""/>
        <h3><strong>{product.title}</strong></h3>
        <h3>{product.price} €</h3>
        <Link to={`/product/${product.id}`}>
        View details
        </Link>
    </div>
}
export default ProductCard;