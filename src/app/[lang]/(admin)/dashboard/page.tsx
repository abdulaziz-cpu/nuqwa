import React from 'react';

export default function AdminDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Admin Overview</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Pending Verifications</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>12</p>
                    <span style={{ color: 'orange', fontSize: '0.8rem' }}>Requires Nafath Check</span>
                </div>
                <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Active Disputes</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>3</p>
                </div>
                <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Total GMV (Today)</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>SAR 45,200</p>
                </div>
            </div>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Verification Queue (Nafath Integration)</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee', color: 'var(--color-text-muted)' }}>
                            <th style={{ padding: '1rem' }}>User</th>
                            <th style={{ padding: '1rem' }}>National ID</th>
                            <th style={{ padding: '1rem' }}>Status</th>
                            <th style={{ padding: '1rem' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid #f9f9f9' }}>
                            <td style={{ padding: '1rem' }}>
                                <strong>Fahad Al-Otaibi</strong><br />
                                <span style={{ fontSize: '0.8rem', color: '#888' }}>Artist</span>
                            </td>
                            <td style={{ padding: '1rem' }}>104*****82</td>
                            <td style={{ padding: '1rem' }}><span style={{ background: '#fff3cd', color: '#856404', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>Pending Nafath</span></td>
                            <td style={{ padding: '1rem' }}>
                                <button style={{ padding: '0.5rem 1rem', background: 'var(--color-heritage-teal)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Verify Identity</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem' }}>
                                <strong>Sara Ahmed</strong><br />
                                <span style={{ fontSize: '0.8rem', color: '#888' }}>Collector</span>
                            </td>
                            <td style={{ padding: '1rem' }}>109*****21</td>
                            <td style={{ padding: '1rem' }}><span style={{ background: '#d4edda', color: '#155724', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>Verified</span></td>
                            <td style={{ padding: '1rem' }}>
                                <span style={{ color: '#ccc' }}>Approved</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
