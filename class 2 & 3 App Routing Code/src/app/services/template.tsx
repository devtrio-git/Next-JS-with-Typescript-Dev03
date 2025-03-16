
export default function ServiceTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<div>
        <h1>Template </h1>
        {children}
    </div>);
}
