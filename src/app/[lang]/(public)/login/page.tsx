import React from 'react';
import { signIn } from '../../../auth'; // Server Action if using v5, or client side
// For simplicity in this stub, we'll use a client component approach or form actions

export default function LoginPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--color-bg-light)' }}>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img src="/logo.png" alt="Nuqwa" style={{ height: '60px', marginBottom: '1rem' }} />
                    <h1 style={{ fontSize: '1.5rem' }}>Welcome Back</h1>
                    <p style={{ color: '#666' }}>Sign in to your account</p>
                </div>

                <form action={async () => {
                    "use server"
                    await signIn("google")
                }}>
                    <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <img src="https://authjs.dev/img/providers/google.svg" alt="Google" style={{ height: '20px' }} />
                        Sign in with Google
                    </button>
                </form>

                <div style={{ textAlign: 'center', margin: '1rem 0', color: '#ccc' }}>OR</div>

                <form>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                        <input type="email" name="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} placeholder="you@example.com" />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
                        <input type="password" name="password" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} placeholder="••••••••" />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '0.75rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Sign In
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    Don't have an account? <a href="/signup" style={{ color: 'var(--color-primary)' }}>Sign up</a>
                </p>
            </div>
        </div>
    );
}
