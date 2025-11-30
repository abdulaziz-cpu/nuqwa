import React from 'react';

export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="platform-layout" style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{ width: '250px', background: '#f5f5f5', padding: '1rem' }}>
                <div className="logo" style={{ marginBottom: '2rem', fontWeight: 'bold' }}>NUQWA CONSOLE</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/listings">Listings</a>
                    <a href="/orders">Orders</a>
                    <a href="/analytics">Analytics</a>
                    <hr />
                    <a href="/settings">Settings</a>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem' }}>{children}</main>
        </div>
    );
}
