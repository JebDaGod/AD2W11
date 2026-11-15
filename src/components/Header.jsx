import "./Header.css";

import Navigation from '../Navigation';

function Header({ storeName }) {
    return (
        <header>
            <h1>{storeName}</h1>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Build Your PC</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;

