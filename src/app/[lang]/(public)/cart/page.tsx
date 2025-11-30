import React from 'react';

export default function CartPage() {
    return (
        <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Your Cart</h1>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {/* Empty State Mock */}
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Your cart is currently empty.</p>
                    <a href="/marketplace" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-primary)', textDecoration: 'underline' }}>
                        Continue Shopping
                    </a>
                </div>
            </div>
        </div>
    );
}
