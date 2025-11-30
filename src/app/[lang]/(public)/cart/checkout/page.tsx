'use client';

import React, { useState } from 'react';
import { processPayment } from '../../../../../lib/payment';
import { LogisticsService } from '../../../../../lib/integrations/logistics';

export default function CheckoutPage() {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
    const [orderId, setOrderId] = useState<string | null>(null);

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 1. Create Shipment (Mock)
        const shipment = await LogisticsService.createShipment({
            orderId: "ord_" + Date.now(),
            recipient: { name: "Ahmed", address: "Riyadh", city: "Riyadh", phone: "0500000000" },
            if(step === 'confirmation') {
                return (
                    <div style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                        <h1>Order Confirmed!</h1>
                        <p style={{ color: '#666', marginBottom: '2rem' }}>Thank you for your purchase. Your order #{orderId} has been placed.</p>
                        <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'left' }}>
                            <p><strong>Status:</strong> Paid</p>
                            <p><strong>Shipping:</strong> SPL Standard (Tracking: SPL{Math.floor(Math.random() * 100000)})</p>
                            <p><strong>Estimated Delivery:</strong> 3-5 Business Days</p>
                        </div>
                        <a href="/" style={{ display: 'inline-block', marginTop: '2rem', color: 'var(--color-primary)', textDecoration: 'underline' }}>Return to Home</a>
                    </div>
                );
    }

    return (
        <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Checkout</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginTop: '2rem' }}>
                <form onSubmit={handleCheckout}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3>Shipping Address</h3>
                        <input type="text" placeholder="Full Name" required style={{ display: 'block', width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        <input type="text" placeholder="Address" required style={{ display: 'block', width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input type="text" placeholder="City" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            <input type="text" placeholder="Postal Code" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3>Payment Method</h3>
                        <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', background: '#f9f9f9' }}>
                            💳 Credit Card (Mock)
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'var(--color-primary)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1.1rem',
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Processing...' : 'Pay SAR 15,400'}
                    </button>
                </form>

                <div style={{ background: '#fcfcfc', padding: '2rem', borderRadius: '8px', height: 'fit-content' }}>
                    <h3>Order Summary</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>Golden Dunes</span>
                        <span>SAR 15,400</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#666' }}>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        <span>Total</span>
                        <span>SAR 15,400</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
