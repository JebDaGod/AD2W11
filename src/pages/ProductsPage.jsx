import ProductCard from '../components/ProductCard';

function ProductsPage() {
    const products = [
        {
            id: 1,
            name: 'AMD Ryzen 7 7800X3D',
            price: 349.99,
            description: 'High-performance gaming processor.',
            image: 'https://placehold.co/300x200'
        },
        {
            id: 2,
            name: 'NVIDIA RTX 4070',
            price: 549.99,
            description: 'Powerful graphics card for gaming.',
            image: 'https://placehold.co/300x200'
        },
        {
            id: 3,
            name: 'Corsair Vengeance 32GB DDR5',
            price: 89.99,
            description: 'Fast DDR5 memory for your PC.',
            image: 'https://placehold.co/300x200'
        }
    ];

    return (
        <main>
            <h2>Our Products</h2>

            <div className="product-list">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </main>
    );
}

export default ProductsPage;