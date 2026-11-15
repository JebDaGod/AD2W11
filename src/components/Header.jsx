import "./Header.css";
import Navigation from './Navigation';

function Header({ storeName }) {
    return (
        <header>
            <h1>{storeName}</h1>
            <Navigation />
        </header>
    );
}

export default Header;
