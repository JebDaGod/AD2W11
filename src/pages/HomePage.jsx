
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await fetchProducts();
                setProducts(data.slice(0, 3));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    return (
        <main>
            <Hero
                title="Build Your Dream PC"
                subtitle="Find the right components to create YOUR dream PC."
                ctaText="Shop Components"
            />

            <h2>Featured Components</h2>

            {loading && <p>Loading featured components...</p>}

            {error && <p>Error loading products: {error}</p>}

            {!loading && !error && (
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
                                        }).format(price.price * 1.30) /* Average conversion rate from GBP to USD as of 11/15 */
                                        : 'Price unavailable'
                                }
                                /* price 
                                    ? `${price.currency} ${price.price.toFixed(2)}`
                                    : 'Price unavailable'    
                                ADDED HARD CODED CONVERSION TO USD */
                                image={
                                    product.imageUrl ||
                                    'https://placehold.co/600x400'
                                }
                                description={`${product.brand || ''} ${product.category?.name || 'PC Component'}`}
                            />
                        );
                    })}
                </div>
            )}
        </main>
    );
}

export default HomePage;
