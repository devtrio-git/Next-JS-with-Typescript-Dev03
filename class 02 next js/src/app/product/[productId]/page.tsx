import { redirect } from "next/navigation";


interface IProps {
    params: {
        productId: string;
    }
    searchParams: {
        name: string;
        rating: number
    }
}
export default function SingleProductPage(props: IProps) {
    const { name, rating } = props.searchParams;
    if (name) {
        redirect(`/product/${props.params.productId}/${name}`)
    }
    return <div>
        <h1>Single Product Page</h1>
        <h1>{props.params.productId}</h1>

        <h1>Name: {name}</h1>
        <h1>Rating: {rating}</h1>
    </div>
}