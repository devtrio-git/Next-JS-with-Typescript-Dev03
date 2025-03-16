import { redirect } from "next/navigation";

interface IProps {
    params: Promise<{
        productId: string;
    }>
    searchParams: Promise<{
        name: string;
        rating: number
    }>
}

export default async function SingleProductPage(props: IProps) {
    const { name, rating } = await props.searchParams;
    const { productId } = await props.params;
    if (name) {
        redirect(`/product/${productId}/${name}`)
    }
    return <div>
        <h1>Single Product Page</h1>
        <h1>{productId}</h1>

        <h1>Name: {name}</h1>
        <h1>Rating: {rating}</h1>
    </div>
}