import "./CartModal.css";

function CartModal({isCartModalOpen, setIsCartModalOpen, cart, total, setCart, setTotal}) {

    function deleteProduct(product_toDelete) {
        setCart(
            cart.filter((product) => {return product.id !== product_toDelete.id})
        );

        setTotal(
            total - product_toDelete.price
        );

        if (total === 0) {
            isCartModalOpen(false)
        }
    }

    return (
        <div className={ isCartModalOpen ? 'CartModal' : 'is-hidden'}>
            <div className="overlay" onClick={() => setIsCartModalOpen(false)}></div>
            <div className='CartModalContainer'>
            <header className='CartModalHeader'>
                <button onClick={() => setIsCartModalOpen(false)}>X</button>
                <h1>Carrello</h1>
            </header>
            <div className='CartModalContent'>
                {cart.map((product) => {return (
            <div key={product.id} className='CartModalProduct'>
                <img src={product.image} alt=""/>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <button onClick= {() => deleteProduct(product)}>Rimuovi</button>
            </div>                
            )})}
            <footer>Totale: {total} €</footer>
        </div>
        </div>
        </div> )
        };

export default CartModal;