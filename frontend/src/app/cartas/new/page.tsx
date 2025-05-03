import CartaForm from '@/components/CartaForm';

export default function NovaCartaPage() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Nova Carta
            </h1>
            <CartaForm />
        </div>
    );
}
