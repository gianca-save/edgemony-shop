import { useState } from 'react';
import ProductModal from "./ProductModal.js"

function ProductCard(props) {

    const [isModalOpen, setModalIsOpen] = useState(false);

    return <div className="ProductCard">
        <img src={props.image} alt=""/>
        <h3><strong>{props.title}</strong></h3>
        <h3>{props.price}</h3>
        <button onClick= { () => setModalIsOpen(true)}>View details</button>
        <ProductModal isOpen={isModalOpen} closeModal={() => setModalIsOpen(false)} img = {props.image} title={props.title} description={props.description} price={props.price} addToCart={props.addToCart}/>
    </div>
}
export default ProductCard;