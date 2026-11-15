import { useCart } from '../context/CartContext';
import './CartPage.css';

function CartPage() {
    const { cartItems, removeFromCart } = useCart();

    return (
        <main>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div className="cart-list">
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-image"
                            />

                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <p>Quantity: {item.quantity}</p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default CartPage;