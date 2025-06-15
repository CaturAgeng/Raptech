import '@/styles/globals.css';
import { Navbar } from '@/components/Navbar';
import type { AppProps } from 'next/app';
import { Component } from 'lucide-react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <main className="p-4">
                <Component {...pageProps} />
            </main>
        </>
    );
}