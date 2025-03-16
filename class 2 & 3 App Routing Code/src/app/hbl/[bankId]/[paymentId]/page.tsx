
interface IProps {
    params: Promise<{
        bankId: string;
        paymentId: string;
    }>;
    searchParams: Promise<{
        data: string;
    }>;
}


export default async function HBLGatewayPage(props: IProps) {
    const { bankId, paymentId } = await props.params;
    const { data } = await props.searchParams;

    return <div>
        <h1>HBL</h1>


        <h1>bankId: {bankId}</h1>
        <h1>paymentId: {paymentId}</h1>
        <h1>data: {data}</h1>
    </div>
}