import React from 'react';

export default function PricingPage() {
    return (
        <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ color: 'var(--color-primary-dark)', fontSize: '2.5rem' }}>Choose Your Journey</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Unlock the full power of Nuqwa with our Premium tools.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {/* Free Tier */}
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                    <h2 style={{ color: 'var(--color-text-main)' }}>Standard</h2>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>Free</p>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li>✓ Basic Artist Profile</li>
                        <li>✓ Standard Marketplace Listing</li>
                        <li>✓ Community Support</li>
                    </ul>
                    <button style={{ width: '100%', padding: '1rem', marginTop: '2rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-primary)', borderRadius: '8px', cursor: 'pointer' }}>
                        Get Started
                    </button>
                </div>

                {/* Premium Tier */}
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '2px solid var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '-2rem', background: 'var(--color-accent-gold)', color: '#fff', padding: '0.5rem 3rem', transform: 'rotate(45deg)', fontSize: '0.8rem' }}>POPULAR</div>
                    <h2 style={{ color: 'var(--color-primary)' }}>Premium</h2>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>SAR 99<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></p>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li>✓ <strong>Subscriber-only Bidding</strong></li>
                        <li>✓ <strong>AI Creator Tools</strong> (Title/Desc Gen)</li>
                        <li>✓ Advanced Analytics</li>
                        <li>✓ Priority Support</li>
                        <li>✓ 0% Commission on first 5 sales</li>
                    </ul>
                    <button style={{ width: '100%', padding: '1rem', marginTop: '2rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
}
