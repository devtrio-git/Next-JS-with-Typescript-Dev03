

interface IProps {
    params: {
        productName: string;
        productId: string
    }
}
export default function ProductNamePage(props: IProps) {
    const { productName, productId } = props.params;
    return <div>

        <h1>Name: {productName} id: {productId}</h1>
    </div>
}