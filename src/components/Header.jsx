import "./Header.css";
import Navigation from './Navigation';
import { useCart } from '../context/CartContext';

function Header({ storeName }) {
    const { cartCount } = useCart();
    return (
        <header className="site-header">
            <h1>{storeName}</h1>
                <div className="header-cart">
                    <span>Cart: </span>
                    <span className="cart-count">{cartCount}</span>
                </div>
              
            <Navigation />
        </header>
    );
}

export default Header;
