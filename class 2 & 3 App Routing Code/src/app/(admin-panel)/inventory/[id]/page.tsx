'use client';
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function InventoryNewPage() {
    const params = useParams();
    const router = useRouter();

    return <main>
        <h1>Inventory Edit</h1>
        <h1>Inventory ID: {params.id ?? ""}</h1>
        <button onClick={() => router.push('/dashboard')}>Back to dashboard</button>
        <button onClick={() => router.back()}>Back</button>
    </main>
}