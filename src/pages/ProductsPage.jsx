
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return (
            <main>
                <h2>PC Components</h2>
                <p>Loading components...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <h2>PC Components</h2>
                <p>{error}</p>
                <p>Please try again later.</p>
            </main>
        );
    }

    return (
        <main>
            <h2>PC Components</h2>
            <p>Browse our selection of computer hardware.</p>

            <div className="product-list">
                {products.map(product => {
                    const price = product.prices?.[0];

                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.displayName || product.name}
                            price={
                                price
                                    ? new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(price.price * 1.30)
                                    : 'Price unavailable'
                                /* price 
                                ? `${price.currency} ${price.price.toFixed(2)}`
                                : 'Price unavailable'    
                            ADDED HARD CODED CONVERSION TO USD */
                            }
                            image={
                                product.imageUrl ||
                                'https://placehold.co/600x400'
                            }
                            description={`${product.brand || ''} ${product.category?.name || 'PC Component'}`}
                        />
                    );
                })}
            </div>
        </main>
    );
}

export default ProductsPage;
