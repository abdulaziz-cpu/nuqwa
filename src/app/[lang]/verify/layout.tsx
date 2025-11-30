import React from 'react';

export default function VerifyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="verify-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>NUQWA VERIFY</div>
                    <p style={{ color: '#666' }}>Digital Certificate of Authenticity</p>
                </div>
                {children}
            </div>
        </div>
    );
}
