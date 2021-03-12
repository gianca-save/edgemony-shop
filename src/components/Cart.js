import './Cart.css'

function Cart({num_items, total}) {
    return <div className='Cart'>
        <p>{num_items} Articoli</p>
        <h3><strong>Totale: {total} €</strong></h3>
    </div>
}

export default Cart;