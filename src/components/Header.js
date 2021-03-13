import Cart from "./Cart.js";

function Header({logo, cart, total, setIsCartModalOpen}) {
    return (
    <div className="Header"><img id="logo" src={logo} alt=""/>
    {(total>0) && (<Cart total={total} num_items={cart.length} setIsCartModalOpen={setIsCartModalOpen} />)}
    </div>)
}

export default Header;