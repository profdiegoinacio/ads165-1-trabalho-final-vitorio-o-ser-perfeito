'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditarCartaPage() {
    const router = useRouter();
    const { id } = useParams();
    const [form, setForm] = useState({
        nome: '',
        descricao: '',
        vida: '',
        dano: '',
    });

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/cartas/${id}`)
            .then(res => res.json())
            .then(data => {
                setForm({
                    nome: data.nome,
                    descricao: data.descricao,
                    vida: data.vida.toString(),
                    dano: data.dano.toString(),
                });
            })
            .catch(() => alert('Erro ao carregar carta'));
    }, [id]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch(`http://localhost:8080/api/v1/cartas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...form,
                vida: parseInt(form.vida),
                dano: parseInt(form.dano),
            }),
        });

        if (res.ok) {
            router.push('/cartas');
        } else {
            alert('Erro ao atualizar carta');
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Editar Carta</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Nome</label>
                    <input
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Descrição</label>
                    <textarea
                        name="descricao"
                        value={form.descricao}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Vida</label>
                    <input
                        type="number"
                        name="vida"
                        value={form.vida}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">Dano</label>
                    <input
                        type="number"
                        name="dano"
                        value={form.dano}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-semibold"
                >
                    Salvar Alterações
                </button>
            </form>
        </div>
    );
}
