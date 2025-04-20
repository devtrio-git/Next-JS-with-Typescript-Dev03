
export default function ProductDetailLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <h1 style={{ textAlign: "center" }}>Single Product Detail Page Layout</h1>
            {children}
        </main>
    );
}
