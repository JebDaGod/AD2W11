
import ProductCard from '../components/ProductCard';

function ProductsPage() {
    const products = [
        {
            id: 1,
            name: 'AMD Ryzen 7 7800X3D',
            price: '349.99',
            image: 'https://placehold.co/600x400',
            description: 'High-performance gaming CPU with 8 cores and 16 threads.'
        },
        {
            id: 2,
            name: 'NVIDIA GeForce RTX 4070',
            price: '549.99',
            image: 'https://placehold.co/600x400',
            description: 'Powerful graphics card for gaming and high-quality PC performance.'
        },
        {
            id: 3,
            name: 'Corsair Vengeance 32GB DDR5',
            price: '89.99',
            image: 'https://placehold.co/600x400',
            description: '32GB DDR5 memory kit designed for modern gaming and productivity PCs.'
        }
    ];

    return (
        <main>
            <h2>Our PC Components</h2>
            <p>Explore our selection of computer hardware.</p>

            <div className="product-list">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </main>
    );
}

export default ProductsPage;
