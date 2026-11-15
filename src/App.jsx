
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header storeName="Component Corner" />

            <Hero
                title="Build Your Dream PC"
                subtitle="Find the right components to create YOUR dream PC."
                ctaText="Shop Components"
            />

            <main>
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
                        description="32GB DDR5 memory kit designed for modern gaming and productivity PCs."
                    />
                </div>
            </main>

            <Footer
                storeName="Component Corner"
                address="123 Computer Lane, Tech City, SC 29000"
                phone="(555) 123-4567"
                email="support@pccomponentstore.com"
            />
        </div>
    );
}

export default App;
