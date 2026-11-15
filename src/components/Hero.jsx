import { Link } from 'react-router-dom';
import "./Hero.css";

function Hero({ title, subtitle, ctaText }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to="/products" className="hero-button">
                    {ctaText}
                </Link>
            </div>

            <img
                src="https://placehold.co/600x300/282828/c8c8c8?text=PC+Components"
                alt="PC components"
                className="hero-image"
            />
        </section>
    );
}

export default Hero;