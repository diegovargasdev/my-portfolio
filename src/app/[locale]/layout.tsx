import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export default function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    if (!locales.includes(locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
}
