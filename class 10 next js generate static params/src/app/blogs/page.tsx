'use client';

import { useEffect } from "react";
import useApiState from "../hooks/use-api-state";
import { useRouter } from "next/navigation";

interface IBlog {
    title: string
    content: string
    _id: string
}
export default function BlogsPage() {
    const [blogs, setBlogs, callBlogs, error, loading] = useApiState<null | IBlog[]>([]);
    const router = useRouter();
    useEffect(() => {
        async function fetchBlogs() {
            callBlogs(async function () {
                const res = await fetch('/api/blog/all');
                const body = await res.json();
                console.log(body, 'body');
                setBlogs(body.data);
            })
        }
        fetchBlogs()
    }, []);
    return <main>
        <h1>Blogs</h1>
        {!error && loading && <h1>loading...</h1>}
        {!error && blogs && blogs.map(b => <h1 onClick={() => router.push(`/blogs/${b._id}`)}>{b?.title}</h1>)}
    </main>
}