import React from 'react';
import { getDictionary } from '../dictionaries';

export default async function VerifyPage({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang);

    return (
        <div>
            <h1 style={{ marginBottom: '1rem' }}>{dict.verify.title}</h1>
            <p style={{ marginBottom: '1rem' }}>{dict.verify.instruction}</p>
            <form style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="text"
                    placeholder={dict.verify.placeholder}
                    style={{ flex: 1, padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    {dict.verify.button}
                </button>
            </form>

            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>
                    {dict.verify.securedBy}
                </p>
            </div>
        </div>
    );
}
