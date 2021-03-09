/* import { PropTypes } from "prop_types"; */

import './CartModal.css';

function CartModal({products_onCart, total}) {
    return <div className='CartModal'>
        <header class='CartModal_header'>
            <h1>Cart</h1>
            <button>X</button>
        </header>
        <div className='Product_onCart_Collector'>
            {products_onCart.map((product) => {return <div className='Product_onCart'>
                <img src={product.image} alt=""/>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
            </div> })}
        </div>
        <footer>
            <h3>Total: {total}</h3>
        </footer>
        </div>
}

export default CartModal;