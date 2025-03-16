'use client';

import NotFound from "@/app/not-found";
import { notFound, useSearchParams } from "next/navigation";

export default function InventoryNewPage() {
    const searchParams = useSearchParams();
    const catId = searchParams.get('cat_id')

    if (!catId) {
        notFound();
        // return <NotFound></NotFound>
    }
    return <main>
        <h1>Inventory New</h1>
        <h1>Category ID: {catId ?? ""}</h1>

    </main>
}