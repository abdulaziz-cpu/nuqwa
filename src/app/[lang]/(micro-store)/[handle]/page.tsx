import React from 'react';
import { getDictionary } from '../../../dictionaries';

// Mock DB Fetch
async function getArtistAndArtwork(handle: string) {
    // In real app: await prisma.artistProfile.findUnique({ where: { handle }, include: { user: true, artworks: true } })
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate latency
    return {
        name: handle || "Unknown Artist",
        bio: "Contemporary calligraphy artist based in Riyadh. Exploring the intersection of tradition and modernity.",
        artwork: {
            id: "art_123",
            title: "Golden Dunes",
            price: 15400,
            image: "https://placehold.co/600x400", // Placeholder
            type: "Oil on Canvas, 2024"
        }
    };
}

export default async function ArtistStorePage({ params }: { params: { handle: string; lang: string } }) {
    const dict = await getDictionary(params.lang);
    const data = await getArtistAndArtwork(params.handle);

    return (
        <div>
            <header style={{ padding: '4rem 2rem', textAlign: 'center', background: '#fcfcfc' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#ddd', margin: '0 auto 1rem' }}></div>
                <h1 style={{ textTransform: 'capitalize' }}>{data.name}</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                    {data.bio}
                </p>
            </header>

            <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>{dict.store.featured}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Artwork Image */}
                    <div style={{ background: '#f0f0f0', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={data.artwork.image} alt={data.artwork.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Product Details & Bidding */}
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{data.artwork.title}</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{data.artwork.type}</p>

                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span>{dict.store.currentBid}</span>
                                <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>SAR {data.artwork.price.toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '0.9rem', color: '#666' }}>
                                <span>{dict.store.endsIn}</span>
                                <span>14h 32m</span>
                            </div>

                            {/* Bidding Logic Mock */}
                            <div style={{ padding: '1rem', background: 'var(--color-bg-light)', borderRadius: '8px', border: '1px dashed var(--color-secondary)' }}>
                                <h4 style={{ margin: '0 0 0.5rem', color: 'var(--color-secondary-dark)' }}>🔒 {dict.store.subscriberOnly}</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Only Premium members can place bids on this exclusive piece.</p>
                                <button style={{ width: '100%', padding: '0.75rem', background: 'var(--color-secondary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                    {dict.store.upgradeToBid}
                                </button>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <span style={{ fontSize: '0.8rem', color: '#888' }}>Standard Purchase Price: SAR 22,000</span>
                                <button style={{ display: 'block', width: '100%', marginTop: '0.5rem', padding: '0.75rem', background: 'transparent', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
                                    {dict.store.buyNow}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
