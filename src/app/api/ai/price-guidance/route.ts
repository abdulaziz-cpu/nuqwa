import { NextResponse } from 'next/server';
import { auth } from '../../../../auth';
import { estimateArtworkPrice } from '@/lib/ai';

export async function POST(req: Request) {
    const session = await auth();

    if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { details } = await req.json();
        const estimate = await estimateArtworkPrice(details);
        return NextResponse.json({ success: true, data: estimate });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to estimate price' }, { status: 500 });
    }
}
