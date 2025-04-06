'use client';
import React, { useEffect } from "react";
interface IBlog {
    id: string;
    title: string;
}
export default function BlogClient() {
    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    async function fetchBlogs() {
        const res = await fetch("https://67f2ae93ec56ec1a36d3e03f.mockapi.io/blog");
        const data = await res.json();
        setBlogs(data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);
    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Blog's CSR</h1>
            {blogs && blogs?.map((blog) => (<div key={blog.id} style={{ padding: '5px', border: '1px solid black', margin: '5px' }}>
                <h2>{blog.title}</h2>
            </div>))}

        </div>
    );
}