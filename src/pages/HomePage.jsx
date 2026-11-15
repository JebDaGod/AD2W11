
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

function HomePage() {
    return (
        <main>
            <Hero
                title="Build Your Dream PC"
                subtitle="Find the right components to create YOUR dream PC."
                ctaText="Shop Components"
            />

            <h2>Featured Components</h2>

            <div className="product-list">
                <ProductCard
                    name="AMD Ryzen 7 7800X3D"
                    price="349.99"
                    image="https://placehold.co/600x400"
                    description="High-performance gaming CPU with 8 cores and 16 threads."
                />

                <ProductCard
                    name="NVIDIA GeForce RTX 4070"
                    price="549.99"
                    image="https://placehold.co/600x400"
                    description="Powerful graphics card for gaming and high-quality PC performance."
                />

                <ProductCard
                    name="Corsair Vengeance 32GB DDR5"
                    price="89.99"
                    image="https://placehold.co/600x400"
                    description="32GB DDR5 memory kit for gaming and productivity."
                />
            </div>
        </main>
    );
}

export default HomePage;
