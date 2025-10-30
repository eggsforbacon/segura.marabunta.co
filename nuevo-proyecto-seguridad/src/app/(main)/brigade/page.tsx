import { BrigadeHero } from '@/components/features/brigade/BrigadeHero';
import { BrigadeProfileCard } from '@/components/features/brigade/BrigadeProfileCard';
import { Brigadista } from '@/types/brigade';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getBrigadista() {
    try {

        const res = await fetch(`${baseUrl}/brigadistas?&sort[0]=orden&sort[1]=orden&populate=*`, {
            cache: 'no-store'
        });

        if (!res.ok) throw new Error('No se pudieron obtener los datos');
        const data = await res.json();
        return data.data || [];
    } catch (error) {
        console.error("Error al obtener brigadistas:", error);
        return [];
    }
}
export default async function BrigadePage() {
    const brigadista: Brigadista[] = await getBrigadista();

    return (
        <div className="bg-black text-white">
            <BrigadeHero />
            <div className="font-sans p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    {brigadista.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                            {brigadista.map((brigadista) => (
                                <BrigadeProfileCard key={brigadista.id} brigadista={brigadista} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-400">No se encontraron brigadistas. Asegúrate de haberlos
                            creado y publicado en Strapi.</p>
                    )}
                </div>
            </div>
        </div>
    );
}