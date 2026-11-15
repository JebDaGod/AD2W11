
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <main>
            <h2>404 - Page Not Found</h2>

            <p>
                Sorry, the page you are looking for does not exist.
            </p>

            <Link to="/">
                Return to Home
            </Link>
        </main>
    );
}

export default NotFoundPage;
