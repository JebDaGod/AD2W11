import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

import userEvent from '@testing-library/user-event';

function TestComponent() {
    const { cartItems, addToCart, removeFromCart, cartCount } = useCart();

    const product = {
        id: 1,
        name: 'Ryzen 7 7800X3D',
        price: '$349.99'
    };

    return (
        <div>
            <p>Cart Count: {cartCount}</p>
            <p>Products: {cartItems.length}</p>

            <button onClick={() => addToCart(product)}>
                Add Product
            </button>

            <button onClick={() => removeFromCart(1)}>
                Remove Product
            </button>

            {cartItems.map(item => (
                <p key={item.id}>
                    {item.name} - Quantity: {item.quantity}
                </p>
            ))}
        </div>
    );
}

function setupCart() {
    const user = userEvent.setup();

    render(
        <CartProvider>
            <TestComponent />
        </CartProvider>
    );

    return { user };
}

describe('CartContext', () => {
    it('starts with an empty cart', () => {
        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        expect(screen.getByText('Cart Count: 0')).toBeInTheDocument();
        expect(screen.getByText('Products: 0')).toBeInTheDocument();
    });

    it('adds a product to the cart', async () => {
        const { user } = setupCart();

        await user.click(screen.getByRole('button', { name: 'Add Product' }));

        expect(screen.getByText('Cart Count: 1')).toBeInTheDocument();
        expect(screen.getByText('Ryzen 7 7800X3D - Quantity: 1')).toBeInTheDocument();
    });

    it('increases quantity when the same product is added again', async () => {
        const { user } = setupCart();

        await user.click(screen.getByRole('button', { name: 'Add Product' }));
        await user.click(screen.getByRole('button', { name: 'Add Product' }));

        expect(screen.getByText('Cart Count: 2')).toBeInTheDocument();
        expect(screen.getByText('Products: 1')).toBeInTheDocument();
        expect(screen.getByText('Ryzen 7 7800X3D - Quantity: 2')).toBeInTheDocument();
    });

    it('removes a product from the cart', async () => {
        const { user } = setupCart();

        await user.click(screen.getByRole('button', { name: 'Add Product' }));
        await user.click(screen.getByRole('button', { name: 'Remove Product' }));

        expect(screen.getByText('Cart Count: 0')).toBeInTheDocument();
        expect(screen.getByText('Products: 0')).toBeInTheDocument();
    });
});