import React from 'react';
import '../globals.css';
import { Providers } from '../providers';

export const metadata = {
    title: 'Nuqwa',
    description: 'The premier platform for Arabic art.',
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const actualLang = lang || 'en';
    const dir = actualLang === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={actualLang} dir={dir}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
