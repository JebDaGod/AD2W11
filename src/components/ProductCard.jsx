import "./ProductCard.css";
import { useCart } from '../context/CartContext';

function ProductCard({ id, name, price, image, description }) {
    const { addToCart } = useCart();

    function handleAddToCart() {
        console.log("Adding product:", id, name);

        addToCart({
            id,
            name,
            price,
            image,
            description
        });
    }

    return (
        <div className="product-card">
            <img
                src={image}
                alt={name}
                className="product-image"
            />

            <div className="product-info">
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{description}</p>

                <button type="button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;