import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Devtrio E Shopping Store",
    description: "Explore best deals and offer on Devtrio Shopping store",
    authors: [{ name: "Devtrio", url: "devtrio.pro" }], // for blogs post only..
    openGraph: {
        title: "Graph Devtrio E Shopping Store",
        description: "Graph Explore best deals and offer on Devtrio Shopping store",
        url: "https://my-first-next-app-one-gamma.vercel.app/products",
        siteName: "Graph Devtrio",
        images: [
            {
                url: 'https://my-first-next-app-one-gamma.vercel.app/shopping.jpeg',
                alt: "Devtrio E Shopping Store",
            }
        ],
    },
    twitter: {
        images: [
            {
                url: 'https://my-first-next-app-one-gamma.vercel.app/shopping.jpeg',
                alt: "Devtrio E Shopping Store",
            }
        ],
    }
}


export default function ProductListingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
