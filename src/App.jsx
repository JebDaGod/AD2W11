
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">

                {/* Shared navigation across all pages */}
                <Header storeName="Component Corner" />

                {/* Main routes */}
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/products"
                        element={<ProductsPage />}
                    />

                    <Route
                        path="/cart"
                        element={<CartPage />}
                    />

                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />

                    {/* Displays when a URL does not match */}
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>

                {/* Shared footer across all pages */}
                <Footer
                    storeName="Component Corner"
                    address="123 Computer Lane, Tech City, SC 29000"
                    phone="(555) 123-4567"
                    email="support@pccomponentstore.com"
                />

            </div>
        </BrowserRouter>
    );
}

export default App;
