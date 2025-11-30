import React from 'react';

export default function MicroStoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="micro-store-layout">
            {/* Micro-stores have minimal branding, focus on the artist */}
            <main>{children}</main>
            <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '0.8rem', color: '#888' }}>
                Powered by Nuqwa
            </footer>
        </div>
    );
}
