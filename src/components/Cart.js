import './Cart.css'

function Cart({num_items, total, setIsCartModalOpen}) {
    return <div className='Cart'>
        {num_items===1 ? <p>1 Articolo</p> : <p>{num_items} Articoli</p> }
        <h3><strong>Totale: {total} €</strong></h3>
        <button onClick={()=> setIsCartModalOpen(true)}>Apri Carrello</button>
    </div>
}

export default Cart;