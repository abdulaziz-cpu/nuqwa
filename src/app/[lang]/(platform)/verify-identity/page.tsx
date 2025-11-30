'use client';

import React, { useState, useEffect } from 'react';
import { NafathService } from '../../../lib/integrations/nafath';

export default function IdentityVerificationPage() {
    const [nationalId, setNationalId] = useState('');
    const [step, setStep] = useState<'input' | 'waiting' | 'success'>('input');
    const [requestData, setRequestData] = useState<any>(null);
    const [error, setError] = useState('');

    const handleInitiate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (nationalId.length !== 10) {
            setError('National ID must be 10 digits');
            return;
        }
        setError('');

        try {
            const data = await NafathService.initiateVerification(nationalId);
            setRequestData(data);
            setStep('waiting');
        } catch (err) {
            setError('Failed to initiate verification');
        }
    };

    // Poll for status
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (step === 'waiting' && requestData?.requestId) {
            interval = setInterval(async () => {
                const statusData = await NafathService.checkStatus(requestData.requestId);
                if (statusData.status === 'COMPLETED') {
                    setStep('success');
                    clearInterval(interval);
                }
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [step, requestData]);

    return (
        <div style={{ padding: '4rem 2rem', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <img src="https://nafath.sa/images/logo.png" alt="Nafath" style={{ height: '60px', marginBottom: '2rem' }} />

            {step === 'input' && (
                <form onSubmit={handleInitiate} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Verify Identity</h2>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Please enter your National ID to verify via Nafath.</p>

                    <input
                        type="text"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        placeholder="National ID (10 digits)"
                        style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', textAlign: 'center', letterSpacing: '2px', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

                    <button type="submit" style={{ width: '100%', padding: '1rem', background: '#00847E', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer' }}>
                        Verify
                    </button>
                </form>
            )}

            {step === 'waiting' && (
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Open Nafath App</h2>
                    <p style={{ marginBottom: '2rem' }}>Please open the Nafath app and select the number:</p>

                    <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#00847E', marginBottom: '2rem' }}>
                        {requestData?.randomCode}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', animation: 'pulse 1s infinite' }}></span>
                        <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></span>
                        <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></span>
                    </div>
                    <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>Waiting for approval...</p>
                </div>
            )}

            {step === 'success' && (
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderTop: '4px solid #4CAF50' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <h2 style={{ marginBottom: '1rem' }}>Verified Successfully</h2>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Your identity has been verified. You can now access all features.</p>
                    <a href="/dashboard" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: '#00847E', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
                        Continue to Dashboard
                    </a>
                </div>
            )}
        </div>
    );
}
