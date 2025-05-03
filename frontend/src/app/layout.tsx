import type { ReactNode } from 'react';
import './globals.css';


export const metadata = {
    title: 'Cartas TCG',
    description: 'Frontend integrado com API Spring Boot',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="pt-BR">
        <body className="bg-white text-gray-900 p-6">
        {children}
        </body>
        </html>
    );
}
