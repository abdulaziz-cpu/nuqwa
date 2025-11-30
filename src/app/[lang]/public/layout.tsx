import React from 'react';
import { getDictionary } from '../dictionaries';
import { getAppUrl } from '../../../lib/utils';

export default async function PublicLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="public-layout">
            <header style={{
                padding: '1rem 2rem',
                background: 'var(--color-bg-white)',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src="/logo.png" alt="Nuqwa Logo" style={{ height: '50px' }} />
                </div>
                <nav style={{ display: 'flex', gap: '2rem', fontWeight: '600' }}>
                    <a href="/marketplace" style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>{dict.nav.marketplace}</a>
                    <a href="/pricing" style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>{dict.nav.pricing}</a>
                    <a href="/technology" style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>{dict.nav.technology}</a>
                    <a href={`${getAppUrl()}/login`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{dict.common.login}</a>
                    <a href="/cart" style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>
                        {dict.nav.cart} (0)
                    </a>
                </nav>
            </header>
            <main>{children}</main>
            <footer style={{ padding: '2rem', background: 'var(--color-bg-white)', marginTop: '2rem', borderTop: '1px solid #eee' }}>
                <p>{dict.common.footer}</p>
            </footer>
        </div>
    );
}
