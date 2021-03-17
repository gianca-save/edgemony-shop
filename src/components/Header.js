import Cart from "./Cart.js";
import {Link} from 'react-router-dom';

function Header({logo, cart, total, setIsCartModalOpen}) {
    return (
    <div className="Header">
        <Link to='/'>
            <img id="logo" src={logo} alt=""/>
        </Link>
    {(total>0) && (<Cart total={total} num_items={cart.length} setIsCartModalOpen={setIsCartModalOpen} />)}
    </div>)
}

export default Header;