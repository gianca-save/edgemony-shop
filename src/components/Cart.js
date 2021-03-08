function Cart(props) {

   /*  function getTotal() {
        let total = total + product_price;
        for (product_price in props.products.price) {
            let total = total + product_price;
        }

        return total;
    } */

    return (<div className='Cart'><div className='Cart_List'>{(props.products).map((product) => { return (<div><img src={product.image} alt=""/></div>)})}</div>
    <h3>Totale: </h3></div>);
}

export default Cart;