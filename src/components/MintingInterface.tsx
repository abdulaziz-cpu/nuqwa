'use client';

import React, { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';

export const MintingInterface = () => {
    const { isConnected } = useAccount();
    const [isMinting, setIsMinting] = useState(false);

    // Mock Contract ABI/Address would go here
    // const { writeContract } = useWriteContract();

    const handleMint = async () => {
        setIsMinting(true);
        // Simulate blockchain transaction
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert("Artwork DCoA Minted Successfully on Polygon Amoy!");
        setIsMinting(false);
    };

    if (!isConnected) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', background: '#f0f0f0', borderRadius: '8px', marginTop: '2rem' }}>
                <p>Connect your wallet to mint Digital Certificates of Authenticity (DCoA).</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', border: '1px solid var(--color-primary)', borderRadius: '8px', marginTop: '2rem', background: '#fff' }}>
            <h3 style={{ color: 'var(--color-primary-dark)' }}>Mint DCoA</h3>
            <p style={{ marginBottom: '1rem', color: '#666' }}>Create a permanent record of your artwork on the blockchain.</p>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Artwork ID</label>
                    <input type="text" value="art_12345" disabled style={{ width: '100%', padding: '0.5rem', background: '#eee', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <button
                    onClick={handleMint}
                    disabled={isMinting}
                    style={{
                        padding: '0.75rem 1.5rem',
                        background: isMinting ? '#ccc' : 'var(--color-secondary)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isMinting ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {isMinting ? 'Minting...' : 'Mint Certificate'}
                </button>
            </div>
        </div>
    );
};
