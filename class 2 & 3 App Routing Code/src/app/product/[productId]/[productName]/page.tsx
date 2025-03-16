

interface IProps {
    params: Promise<{
        productName: string;
        productId: string
    }>
}
export default async function ProductNamePage(props: IProps) {
    const { productName, productId } = await props.params;
    return <div>

        <h1>Name: {productName} id: {productId}</h1>
    </div>
}