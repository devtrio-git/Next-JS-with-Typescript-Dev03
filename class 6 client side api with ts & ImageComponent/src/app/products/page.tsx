'use client';

import { useEffect } from "react";
import { Constants } from "../../../constants";
import useApiState from "../hooks/use-api-state";
import Product from "@/models/product.model";
import { IProductResponse } from "@/models/apis/response/product.response";
import ProductCard from "../components/card/product-card";

export default function ProductListing() {
    const [products, setProducts, callProductsApi, loading, error] = useApiState<Product[] | null>(null, true);


    async function getAllProducts() {
        callProductsApi(async function () {
            const url = `${Constants.API_BASE}/product`
            const res = await fetch(url);
            const body: IProductResponse[] = await res.json();
            const products = body.map(p => new Product(p));
            setProducts(products);
        })
    }

    useEffect(() => {
        getAllProducts();
    }, [])
    return <main >
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>All Products Page</h1>

        <section style={{ display: 'flex', justifyContent: "center", gap: 30 }}>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && products && products.map(p => <ProductCard key={p.id} data={p}></ProductCard>)}
        </section>
    </main>
}