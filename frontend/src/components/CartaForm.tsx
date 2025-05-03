'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CartaForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        nome: '',
        descricao: '',
        vida: '',
        dano: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch('http://localhost:8080/api/v1/cartas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...form,
                vida: parseInt(form.vida),
                dano: parseInt(form.dano),
            }),
        });

        if (res.ok) {
            router.push('/cartas');
        } else {
            alert('Erro ao salvar carta');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div>
                <label className="block font-semibold">Nome</label>
                <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
            </div>
            <div>
                <label className="block font-semibold">Descrição</label>
                <textarea
                    name="descricao"
                    value={form.descricao}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
            </div>
            <div>
                <label className="block font-semibold">Vida</label>
                <input
                    type="number"
                    name="vida"
                    value={form.vida}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
            </div>
            <div>
                <label className="block font-semibold">Dano</label>
                <input
                    type="number"
                    name="dano"
                    value={form.dano}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Salvar
            </button>
        </form>
    );
}
