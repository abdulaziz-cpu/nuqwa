import React from 'react';

export default function OrdersPage() {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>My Orders & Logistics</h1>

            <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #eee', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', background: '#fcfcfc' }}>
                    <div>
                        <strong>Order #NQ-8821</strong>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Placed on Nov 28, 2025</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>In Transit</div>
                        <div style={{ fontSize: '0.8rem' }}>Arriving Tomorrow</div>
                    </div>
                </div>

                <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '80px', height: '80px', background: '#eee', borderRadius: '4px' }}></div>
                        <div>
                            <h3>Calligraphy Print #4</h3>
                            <p>Artist: Ahmed Al-Saudi</p>
                            <p>SAR 1,200</p>
                        </div>
                    </div>

                    {/* Logistics Tracker */}
                    <div style={{ position: 'relative', paddingLeft: '20px' }}>
                        <div style={{ borderLeft: '2px solid #eee', paddingLeft: '2rem', paddingBottom: '2rem' }}>
                            <div style={{ position: 'absolute', left: '11px', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', transform: 'translateX(-50%)' }}></div>
                            <strong>Out for Delivery</strong>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#666' }}>Riyadh Distribution Center - 08:30 AM</p>
                        </div>
                        <div style={{ borderLeft: '2px solid #eee', paddingLeft: '2rem', paddingBottom: '2rem' }}>
                            <div style={{ position: 'absolute', left: '11px', width: '16px', height: '16px', background: '#ddd', borderRadius: '50%', transform: 'translateX(-50%)' }}></div>
                            <strong>Shipped</strong>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#666' }}>Jeddah Hub - Nov 28</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
