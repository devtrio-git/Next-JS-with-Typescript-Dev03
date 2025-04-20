import { Metadata, ResolvingMetadata } from "next";
import ProductDetail from "./product-detail";
import { Constants } from "../../../constants";
import Product from "@/models/product.model";

interface IRequestSearchParamsProps {
    searchParams: Promise<{
        id: string
    }>
}
async function fetchProduct(product_id: string) {
    let url = `${Constants.API_BASE}/product/${product_id}`;
    const res = await fetch(url);
    const body = await res.json();
    const product = new Product(body);
    return product;
}

export async function generateMetadata(
    { searchParams }: IRequestSearchParamsProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await searchParams;
    const product = await fetchProduct(id);
    const parent_meta_data = await parent;

    const previous_title = parent_meta_data.title || '';
    const previous_description = parent_meta_data.description || '';
    const previous_images = parent_meta_data.openGraph?.images || [];

    return {
        title: product.name ?? previous_title,
        description: product.description ?? previous_description,
        openGraph: {
            title: product.name ?? previous_title,
            description: product.description ?? previous_description,
            url: `https://my-first-next-app-one-gamma.vercel.app/product-detail?id=${id}`,
            images: [product.image, ...previous_images],
        },
        twitter: {
            images: [product.image, ...previous_images],
        }
    }
}


export default async function ProductDetailPage(props: IRequestSearchParamsProps) {
    const params = await props.searchParams;
    return <ProductDetail {...params}></ProductDetail>
}