import React from 'react';
import '../globals.css';
import { Providers } from '../providers';

export const metadata = {
    title: 'Nuqwa',
    description: 'The premier platform for Arabic art.',
};

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const lang = params.lang || 'en';
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={lang} dir={dir}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
