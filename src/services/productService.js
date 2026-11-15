
const API_URL = '/api/vantaspec/products/search';

export async function fetchProducts() { /*Gimme all the product types */
    const searches = [
        'CPU',
        'GPU',
        'RAM',
        'motherboard',
        'SSD'
    ];
    const requests = searches.map(async (search) => {
        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(search)}&limit=10`
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch ${search} products.`);
        }
        const data = await response.json();

        return data.products || [];
    });

    const results = await Promise.allSettled(requests); /* Enables failed results to not completely break the site */

    const successfulResults = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);

    const uniqueProducts = new Map();

    successfulResults.flat().forEach(product => {
        uniqueProducts.set(product.id, product);
    });

    return Array.from(uniqueProducts.values());
}