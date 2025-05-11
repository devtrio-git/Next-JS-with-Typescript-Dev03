'use client';

import Product from "@/models/product.model";
import useApiState from "../hooks/use-api-state";
import { Constants } from "../../../constants";
import { useEffect, useRef } from "react";
import ProductCard from "../components/card/product-card";

interface IProps {
    id: string;
}
export default function ProductDetail({ id }: IProps) {
    const [product, setProduct, callProduct, loading, error] = useApiState<Product | null>(null);

    async function fetchProduct(product_id: string) {
        callProduct(async function () {
            let url = `${Constants.API_BASE}/product/${id}`;
            const res = await fetch(url);
            const body = await res.json();
            setProduct(new Product(body));
        })
    }

    useEffect(() => {
        if (id) {
            fetchProduct(id);
        }
    }, [id]);

    return <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 20, marginTop: 50 }}>
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && product && <ProductCard data={product}></ProductCard>}
        <p>{product ? product.description : ""}</p>
    </div>

}