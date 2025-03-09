
interface IProps {
    params: {
        bankId: string;
        paymentId: string;
    }
    searchParams: {
        data: string
    }
}


export default function HBLGatewayPage(props: IProps) {
    const { bankId, paymentId } = props.params;
    const { data } = props.searchParams;

    return <div>
        <h1>HBL</h1>


        <h1>bankId: {bankId}</h1>
        <h1>paymentId: {paymentId}</h1>
        <h1>data: {data}</h1>
    </div>
}