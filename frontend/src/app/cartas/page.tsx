'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Carta = {
    id: number;
    nome: string;
    descricao: string;
    vida: number;
    dano: number;
};

export default function Page() {
    const [cartas, setCartas] = useState<Carta[]>([]);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/cartas')
            .then((res) => {
                if (!res.ok) throw new Error('Erro ao buscar cartas');
                return res.json();
            })
            .then(setCartas)
            .catch((err) => {
                console.error(err);
                setErro('Erro ao buscar cartas');
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Cartas</h1>
                <Link
                    href="/cartas/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                    Nova Carta
                </Link>
            </div>

            {erro && <p className="text-red-600 dark:text-red-400 mb-4">{erro}</p>}

            {/* Flexível e responsivo com tamanhos definidos */}
            <div className="flex flex-wrap -mx-4">
                {cartas.map((carta) => (
                    <div
                        key={carta.id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 h-full">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{carta.nome}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">{carta.descricao}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">❤️ Vida: {carta.vida}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">⚔️ Dano: {carta.dano}</p>
                            <Link
                                href={`/cartas/${carta.id}/edit`}
                                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                            >
                                Editar
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
