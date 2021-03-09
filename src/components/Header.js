import Cart from "./Cart.js"

function Header(props) {
    return (
        <div className="Header">
            <Cart cart={props.cart} products={props.products} />
            <img id="logo" src={props.logo} alt=""/>
        </div>)
}

export default Header;