
interface IProps {
    params: {
        dyParams: string[]
    }
}


export default function HBLGatewayPage(props: IProps) {


    return <div>
        <h1>Zong</h1>
        {props.params.dyParams && props.params.dyParams.map(p => <h2>{p}</h2>)}
    </div>
}