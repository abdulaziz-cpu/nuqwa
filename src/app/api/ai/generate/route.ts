import { NextResponse } from 'next/server';
import { auth } from '../../../../auth';
import { generateArtworkMetadata } from '@/lib/ai';

export async function POST(req: Request) {
    const session = await auth();

    if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is premium (mock check)
    // if (session.user.role !== 'PREMIUM') ...

    try {
        const { prompt } = await req.json();
        const metadata = await generateArtworkMetadata(prompt);
        return NextResponse.json({ success: true, data: metadata });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to generate metadata' }, { status: 500 });
    }
}
