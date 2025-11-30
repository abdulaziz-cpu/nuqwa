import React from 'react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
            <aside style={{ width: '250px', background: '#1a202c', color: '#fff', padding: '1rem' }}>
                <div className="logo" style={{ marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-digital-turquoise)' }}>NUQWA ADMIN</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</a>
                    <a href="/users" style={{ color: '#fff', textDecoration: 'none' }}>Users & Verification</a>
                    <a href="/logistics" style={{ color: '#fff', textDecoration: 'none' }}>Logistics</a>
                    <a href="/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</a>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem' }}>{children}</main>
        </div>
    );
}
