
interface IProps {
    params: Promise<{
        dyParams: string[]
    }>
}

export default async function HBLGatewayPage(props: IProps) {
    const { dyParams } = await props.params;
    return <div>
        <h1>Zong</h1>
        {dyParams && dyParams.map(p => <h2>{p}</h2>)}
    </div>
}