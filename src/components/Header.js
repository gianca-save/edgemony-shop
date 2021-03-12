import Cart from "./Cart.js";

function Header({logo, cart, setCart, total, setTotal}) {
    return (
    <div className="Header"><img id="logo" src={logo} alt=""/>
    {(total>0) && (<Cart total={total} num_items={cart.length} />)}
    </div>)
}

export default Header;