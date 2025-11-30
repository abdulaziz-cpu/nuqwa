import React from 'react';
import { WalletConnect } from '../../../components/WalletConnect';
import { MintingInterface } from '../../../components/MintingInterface';

export default function DashboardPage() {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Artist Dashboard</h1>
                <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="/verify-identity" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'underline' }}>Verify Identity</a>
                    <WalletConnect />
                    <span>Welcome, Ahmed</span>
                </div>
            </header>

            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', background: '#fff' }}>
                    <h3>Total Sales</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>SAR 12,500</p>
                </div>
                <div style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', background: '#fff' }}>
                    <h3>Active Listings</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>8</p>
                </div>
                <div style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', background: '#fff' }}>
                    <h3>Pending Orders</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>2</p>
                </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <h2>AI Creator Tools</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', opacity: 0.7, background: '#f9f9f9' }}>
                        <h3 style={{ color: 'var(--color-text-muted)' }}>Title & Description Generator</h3>
                        <p>Generate SEO-optimized titles and descriptions for your art.</p>
                        <button disabled style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#ddd', color: '#888', border: 'none', borderRadius: '4px', cursor: 'not-allowed' }}>
                            Premium Only
                        </button>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', background: '#fff' }}>
                        <h3 style={{ color: 'var(--color-text-muted)' }}>Price Guidance</h3>
                        <p>Get AI-driven pricing recommendations based on market trends.</p>

                        <form action="http://localhost:3000/api/ai/price-guidance" method="POST" target="_blank" style={{ marginTop: '1rem' }}>
                            <input type="hidden" name="details" value="Oil painting, 100x100cm, Abstract Calligraphy, Emerging Artist" />
                            <button type="submit" style={{ padding: '0.5rem 1rem', background: 'var(--color-secondary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                Get Estimate
                            </button>
                        </form>
                    </div>
                </div>

                {/* Client Component Stub for AI Generator */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', background: '#fff' }}>
                    <h3>Try AI Title Generator</h3>
                    <form action="http://localhost:3000/api/ai/generate" method="POST" target="_blank">
                        <input type="hidden" name="prompt" value="Abstract desert landscape with golden calligraphy" />
                        <button type="submit" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Generate Sample Metadata
                        </button>
                    </form>
                    <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>* Opens API response in new tab for testing.</p>
                </div>

                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-primary)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Unlock these tools with Nuqwa Premium.</span>
                    <a href="/pricing" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Upgrade Now &rarr;</a>
                </div>
            </div>

            <MintingInterface />

            <div style={{ marginTop: '3rem' }}>
                <h2>Recent Activity</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                            <th style={{ padding: '0.5rem' }}>Event</th>
                            <th style={{ padding: '0.5rem' }}>Date</th>
                            <th style={{ padding: '0.5rem' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '0.5rem' }}>New Order #1023</td>
                            <td style={{ padding: '0.5rem' }}>2 hours ago</td>
                            <td style={{ padding: '0.5rem' }}>Pending</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '0.5rem' }}>Listing "Desert Sunset" Verified</td>
                            <td style={{ padding: '0.5rem' }}>Yesterday</td>
                            <td style={{ padding: '0.5rem' }}>Live</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}
