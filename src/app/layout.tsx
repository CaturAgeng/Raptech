import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadat: Metadata = {
    title: 'RapTech',
    description: "Toko elektronik custom terpercaya dengan kualitas premium. Laptop, smartphone, audio, dan aksesori yang dapat dikustomisasi sesuai kebutuhan Anda.",
    keywords: "elektronik custom, laptop gaming, smartphone custom, audio premium, gadget indonesia, raptech",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}