function Cart({products}) {

    return (<div className='Cart'>
                <ul className='Cart_List'>{products.map((product) => { return (
                    <li><img src={product.image} alt=""/></li>)})}</ul>
    <h3>Totale: </h3></div>);
}

export default Cart;